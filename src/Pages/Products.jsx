import React from 'react'
import ProductCard from '../Components/ProductCard'
import "./Products.css"
// import iphonex from "../img/iphone-x.jpg"
// import iphone12 from "../img/iphone12.jpg"
// import iphone13 from "../img/iphone13.jpg"
// import { useStateValue } from '../StateProvider'
import  {useProductContext}  from '../contextstate/productContext'


const Products = () => {

  const {products} = useProductContext();
  console.log(products);



  // const productArray = Array.isArray(products) ? products : [];
  // console.log(products.payload);
  // const productValues = Object.values(products);

  return (
    <div>
      
      <div className="pcontainer">
      {products.map((currElem, index) => (
          <ProductCard
            key={index}
            id={currElem.id}
            title={currElem.name}
            img={currElem.image}
            price={currElem.price}
            desc= {currElem.description}
          />
        ))}
        {/* {
          productValues.forEach((currElem, index) => {
            console.log(currElem.id, currElem.name, currElem.price);
            // Render or process each item
          })
        } */}
      
      
      {/* <ProductCard id="2" title="Apple IPhone 12" img="https://www.khoslaonline.com/wp-content/uploads/2023/07/IPHONE-12-BLUE-128GB.png" price="78999"/>
      <ProductCard id="3" title="Iphone 13" img={"https://inventstore.in/staging/wp-content/uploads/2023/04/iPhone_13_Pink-768x768.webp"} price="78999"/>
      
      <ProductCard id="4" title="Iphone X" img="https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-space-gray.jpg" price="78999"/>
      
      <ProductCard id="5" title="Iphone 12" img="https://www.khoslaonline.com/wp-content/uploads/2023/07/IPHONE-12-BLUE-128GB.png" price="78999"/>
      <ProductCard id="6" title="Iphone 13" img={"https://inventstore.in/staging/wp-content/uploads/2023/04/iPhone_13_Pink-768x768.webp"} price="78999"/>
      <ProductCard id="7" title="Iphone X" img="https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-x/iphone-x-space-gray.jpg" price="78999"/>
      <ProductCard id="8" title="Iphone 12" img="https://www.khoslaonline.com/wp-content/uploads/2023/07/IPHONE-12-BLUE-128GB.png" price="78999"/>
      <ProductCard id="9" title="Iphone 13" img={"https://inventstore.in/staging/wp-content/uploads/2023/04/iPhone_13_Pink-768x768.webp"} price="78999"/> */}
      </div>
    </div>
  )
}

export default Products