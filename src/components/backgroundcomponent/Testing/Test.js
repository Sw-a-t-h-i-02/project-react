import React from 'react'
import Title from '../../Title/title'
import { testimonal } from '../../dummydata'
import "./style.css"

const Test = () => {
  return (
   
   <>
   <section className='testimonal padding'>
    <div className='container'>
      <Title subtitle="Testimonal" title="Our successful students"/>
      <div className='content grid2'>
        {
          testimonal.map((value)=>(
             <div className='items shadow'>
            <div className='box flex'>
           <div className='img'>
             <img src={value.cover} alt=""/>
             <i className='fa fa-quote-left icon'></i>
            <div/>
            <div className='name'>
              <h2>{value.name}</h2>
              <span>{value.post}</span>
            </div>
         </div>
         <p>{value.desc}</p>
            </div>
      </div>
      ))}
    </div>
    </div>
   </section>
   
   </>
  )
}

export default Test