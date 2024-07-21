
import React from 'react'
import './Navbar.css'
import logo from "../img/ecommerce.png"
import { BsCart3 } from "react-icons/bs";
import Loginbutton from './Loginbutton';
// import ProfileButton from './ProfileButton';
import Profile2button from './Profile2button';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
// import Cart from '../Pages/Cart';
// import { RxHamburgerMenu } from "react-icons/rx";
import { auth } from '../firebase';

const Navbar = () => {

  const{cart,user}=useStateValue();

  const handleSignout = ()=>{
    if(user){
      auth.signOut();
    }
  }
  
  return (
    <div className='Navbarcont'>
      
        <nav className='Navbar'>
          <div id="logoh">
            {/* <RxHamburgerMenu size="2rem"/> */}
            <img src={logo} alt="" id="logohh"/>
            </div>
          
            <ul id='hca'>
                <li className='navers'>
                <div className="cta">
                       <NavLink to={"/"}><span>Home</span></NavLink>
                </div>
                    </li>
                <div className="cta">
                <li className='navers'>
                       <NavLink to={"/contact"}><span>Contact</span></NavLink>
                    </li>
                </div>
                <div className="cta">
                <li className='navers'>
                       <NavLink to={"/products"}><span>Products</span></NavLink>
                    </li>
                </div>
                <div className="cta">
                <li className='navers'>
                       <NavLink to={"/about"}><span>About</span></NavLink>
                    </li>
                </div>
                    
                    
                    
                    
                </ul>
                <div className="rightnav">


                <div className="login" onClick={handleSignout}>

                  <NavLink to={!user && "/login"}>
                 <Loginbutton type={user?"logout":"login"} color={user?"red":"blue"}/>
                  </NavLink>
                </div>
                {/* <div className="login" style={{ display: user ? 'inline-block' : 'none' }}>
                  <NavLink to={"/login"}>
                 <Loginbutton type="logout" color="red" onClick={handleSignout  }/>
                  </NavLink>
                </div> */}
                <NavLink to={"/cart"}>
                <div className='cart chamak'>
                     <BsCart3 size="3rem" id="carti"/>
                     {cart?.length}
                </div>
                </NavLink>
                <div className="profile" style={{display: user?'inline-block':'none'}}>
                    <Profile2button/>
                </div>
                
                </div>
            
            
        </nav>
    </div>
  )
}

export default Navbar