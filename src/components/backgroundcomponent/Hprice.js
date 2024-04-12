import React from 'react'
import Title from '../Title/title'
import PriceCard from '../Pricing/PriceCard'

const Hprice = () => {
  return (
    <>
    <section className='price padding'>
    <Title subtitle='our pricing' title='pricing and pakages'/>
        <div className=' price container grid'>
            <PriceCard/>
            
        </div>
    </section>
    </>
  )
}

export default Hprice