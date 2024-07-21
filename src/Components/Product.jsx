import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';
import "./festurecss.css"

const Product = ({name,image,desc}) => {
    // const {id,name,image,price,description}=currElem;
  return (
    <div> 
        {/* <NavLink id="navlinker" to={`/singleproduct/${id}`}> */}
            {/* <div className="cardd">
                <figure>
                    <img src={image} alt="" />
                    figure
                    <figcaption>{name}</figcaption>
                </figure>
            </div> */}
            {/* <div className="cardcont">
            <Card name={name} image={image} desc={desc}/>
            </div> */}
        {/* </NavLink> */}
    </div>
  )
}

export default Product