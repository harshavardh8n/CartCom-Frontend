import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Success.css"
const Success = () => {
  return (
    <div className='cont'>
        <div className="checki">
            <img src="https://t3.ftcdn.net/jpg/01/57/86/44/360_F_157864480_TFm1nQsUI1o8VLKg6SK6yV9P6tsK4TXN.jpg" alt="" />
        </div>
        <div className="thank">
            Thank you for ordering from CartCom <br />
            <NavLink to={"/"} id="navlink">
                <span>press here to go to home page</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Success