import React from 'react'
import { price } from '../dummydata'
import "./price.css"

const PriceCard = () => {
  return (
    <>
    {
       price.map((value)=>(
      
   
          <div className='items shadow'>
        <h4>{value.name}</h4>
        <h1>
            <span>$</span>
            {value.price}
        </h1>
        <p>{value.desc}</p>
        <button className='outline-btn'>GET STARTED</button>
    </div>
   ))
      
       
    }
       
    </>
  )
}

export default PriceCard