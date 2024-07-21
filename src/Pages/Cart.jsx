import React from 'react'
import CartItem from '../Components/CartItem'
import "./Cart.css"
// import iphone13 from "../img/iphone13.jpg"
import { useStateValue } from '../StateProvider'
import { getCartTotal } from '../reducer'
import { NavLink} from 'react-router-dom'

const Cart = () => {

  const [{cart},dispatch] = useStateValue();

  // const navigate = useNavigate();

  // const btnproc = document.getElementsByClassName("proceed");
  // btnproc.onClick = ()=>{
  //   console.log("hello");
  // }
  const totalpayment = getCartTotal(cart);
  return (
    <div className='cartpage'>
      <div className="left">
      <h2 className='carttitle'>Cart items:</h2>
      <div className="cartitems">
      {cart.map(item=>(
        <CartItem id={item.id} title={item.title} img ={item.image} price={item.price}/>
      )
      )
      }
      {/* <CartItem id="2" title="Apple Iphone 12 pro" img = {iphone13} price="63449"/>
        // <CartItem id="3" title="Apple Iphone 10 pro" img = {iphone13} price="63449"/>
        // <CartItem id="5" title="Apple Iphone 9 pro" img = {iphone13} price="63449"/> */}
      </div>
      </div>
      
      <div className="checkout">
        <div className="checkoutbox">
            <h2 className='total'>Subtotal ({cart.length} items): Rs.{totalpayment}</h2>
            <NavLink to={"/payment"}><button className='proceed'>Proceed to checkout</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Cart