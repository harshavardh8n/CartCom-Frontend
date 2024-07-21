import React from 'react'
import "./CartItem.css"
import { useState } from 'react'
import { useStateValue } from '../StateProvider'


const CartItem = ({title,img,price,id}) => {

  const[state,dispatch] = useStateValue();
  const removefromcart = ()=>{
    dispatch({
      type:'REMOVE_FROM_CART',
      id:id
    })
}

    const[quantity,setquantity]=useState(1);

    const increaseqt = ()=>{
        setquantity(quantity+1);
    }
    const decreaseqt = ()=>{
        if(quantity>1){
            setquantity(quantity-1);
        }
    }
  return (

    <div className='item'>
        <div className="lefti">
            <img src={img} alt="" class="cartitemimage"/>
        </div>
        <div className="desc">
            <div className="title">

            <h2>{title}</h2>
        </div>
        <div className="description">
            <p className='para'>id: {id}</p>
            <p className='para'>color: red</p>
            <div className="quantityc">

            <p className='para'> quantity: </p>
            <div class="number-control">
            <div class="number-left" onClick={decreaseqt}></div>
            <div className="number">{quantity}</div>
            <div class="number-right" onClick={increaseqt}></div>
            </div>
            </div>

        </div>
        <div className="remove">
        <button class="CartBtn" onClick={removefromcart}>
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text2">remove</p>
</button>
        </div>

        </div>
        <div className="price">
    <h2 className='price'>Rs.{price}</h2>
    </div>
        
    </div>
    
  )
}

export default CartItem;