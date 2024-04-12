import React, { useState } from 'react'
import Title from '../Title/title'
import { faq } from '../dummydata'


const Faq = () => {
    const [click,setclick]=useState(false)

    const toggle=(index)=>{
        if(click===index){
            setclick(null)
        }
        setclick(index)
    }
  return (
   <>
   <Title subtitle="FAQS" title="Frequently Asked Questions"/>
   <section className='faq'>
  
    <div className='container'>
        {
            faq.map((value,index)=>(
                <div className='box'>
                    <button className='accordion' onClick={()=>toggle(index)} key={index}>
                        <h2>{value.title}</h2>
                        <span>{click===index?<i className='fa fa-chevron-down'></i>:<i className='fa fa-chevron-right'></i>}</span>
                    </button>
                    {click===index?(
                        <div className='text'>
                            <p>{value.desc}</p>
                        </div>
                    ):null}
                </div>
            ))
        }
    </div>
   </section>
   </>
  )
}

export default Faq