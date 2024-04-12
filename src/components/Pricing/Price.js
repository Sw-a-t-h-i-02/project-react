import React from 'react'
import Back from '../Back/Back'
import PriceCard from './PriceCard'

import Faq from './Faq'

const Price = () => {
  return (
  <>
  <Back title=""/>
  <section className='price padding'>
    <div className='container grid'>
        <PriceCard/>
    </div>
  </section>
  <Faq/>
  </>
  )
}

export default Price