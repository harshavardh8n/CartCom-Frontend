import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItem from '../Components/CartItem';
import { getCartTotal } from '../reducer';
import { useStateValue } from '../StateProvider'
import "./Payment.css"
const Payment = () => {
    const [{user}] = useStateValue();
    const [{cart}] = useStateValue();

    // console.log(cart);//

    const totalpayment = getCartTotal(cart);
  return (
    
    <div className='paymentpage'>
        <div className="address s1">
        <h2>Delivery Address</h2>
        <div>

        <p>{user?.email}</p>
        <p>Shree Chaitany Apartments</p>
        <p>Parvati, Pune</p>
        </div>
        </div>
        <br />
        <div className="conte">

        <div className="items s2">
            <div className="itemreview">
            <h2>Review items and delivery</h2>
            </div>
            <div className="paymentitems">
            
        {cart.map(item=>(
            <CartItem id={item.id} title={item.title} img ={item.image} price={item.price}/>
            )
            )
        }
        </div>
        </div>
        <div className="checkout">
        <div className="checkoutbox">
            <h2 className='total'>Payment of Rs.{totalpayment}</h2>
            <NavLink to={"/success"}><button className='proceed' onClick={()=>{
              toast.success('ordered successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                // transition: Bounce,
                });
            }}>Pay now</button></NavLink>

        </div>
      </div>
    </div>
        </div>
        

  )
}

export default Payment