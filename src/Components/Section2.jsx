import React from 'react'
import "./Section2.css"
// import FeaturedProducts from './FeaturedProducts'
import NewCard from './NewCard'
import { CiDeliveryTruck } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import FeaturedProducts from './FeaturedProducts';

const Section2 = () => {
  return (
    <div className='section2'>
        <FeaturedProducts/>

        <div className="featurecards">
        <NewCard icon={<CiDeliveryTruck size="2rem"/>} cardname="Fast Deliveryy" carddesc="Very fast Delivery"/>
        <NewCard icon={<CiMoneyCheck1 size="2rem"/>} cardname="Affordable" carddesc="Suitable Prices"/>
        <NewCard icon={<RiSecurePaymentFill size="2rem"/>} cardname="Secure" carddesc="much secure"/>
        </div>
        
    </div>
  )
}

export default Section2