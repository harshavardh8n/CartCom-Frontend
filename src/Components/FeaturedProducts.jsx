import React from 'react'
// import  {useProductContext}  from './contextstate/productcontext'
import './festurecss.css'
// import iphone12 from "../img/iphone12.jpg"
import Card from './Card';
// import { useEffect } from 'react';
// import { useStateValue } from '.../StateProvider';
import { useProductContext} from '../contextstate/productContext';
const FeaturedProducts = () => {

        // const {isLoading, featureProducts} = useProductContext();

        // if(isLoading){
        //   return <div>Loading</div>
        // }

        // console.log(featureProducts);
        // // console.log("yo");



  // const[{products},dispatch] = useProductValue();

  // console.log(products);

  const {products} = useProductContext();

  // console.log(products[0].id);
  const featuredProducts = products.filter(product => product.featured);
  console.log(featuredProducts);

  return (
    <div className="featurecont">
      <p>CHECK NOW</p>
      <h2>Our Top Products</h2>

      <div className='featuredcards'>
        {/* <Card name="iphone" image={iphone12} dec="Iphone 12"/> */}
        {/* {
          featuredProducts.map((currElem,index)=>{
            const {id,title,image,description} = currElem;
            <Card key={index} id={id} name={title} desc={description} image={image}></Card>
          })

        } */}
        {featuredProducts.map((currElem, index) => (
          <Card
            key={index}
            id={currElem.id}
            name={currElem.title}
            image={currElem.image}
            // price={currElem.price}
            desc= {currElem.description}
            category={currElem.category}
            className="fcard"
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts;