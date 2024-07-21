import React from 'react'
import bg from "../img/bg.jpg"
import { useStateValue } from '../StateProvider';
import "./Hero.css"
import { NavLink } from 'react-router-dom';
import Carousel from './Carousel';
import { useProductContext } from '../contextstate/productContext';

const Hero = () => {

  const {user}=useStateValue();

  const getUsernameFromEmail = (email) => {
    if (!email) return '';
    return email.split('@')[0];
  };

  const username = getUsernameFromEmail(user?.email)

  // const {products} = useProductContext();
  // console.log(products[0]);

  const images = ["https://img.freepik.com/free-photo/modern-man-tech-collection-wooden-desk-headphones-sunglasses-smartphone-generated-by-ai_24640-92923.jpg","https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];

 // Iterate through each product in the products array
// products.forEach(product => {
//   // Check if the product has images (assuming 'images' is an array of URLs)
//   // images.push(product.image)
//   // console.log(product.image);
//   images.push(product.image);
// })

// console.log(images)


  return (
    
    <div className="herocont">

<h1>Auto-rotating Carousel Example</h1>
      <Carousel images={images} />

    {/* <div id="bg">
        <div className='titlee'>
        <p id='username'> Hello, {username}</p>
          <h3>Welcome to<br /><span>CartCom</span></h3></div>
        <div className="shopnow">
            <NavLink to={"/products"}><button id='shop'>Shop now</button></NavLink>
        </div>
        <img src={bg} alt="" id="bgi"/>
    </div> */}
    
    </div>
  )
}

export default Hero;