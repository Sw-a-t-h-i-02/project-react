import React from 'react'
import { coursesCard } from '../dummydata'
import "./course.css"

import { useNavigate } from 'react-router-dom'

const CourseCard = () => {

    const navigate=useNavigate()
    console.log(coursesCard,"hello");
  return (
    <section className='coursesCard'>
        <div className='bgimg'>
            
        </div>
        <div  className='container grid2'>
            {
                coursesCard.map((value)=>{
                    return(
                    <div className='items'>
                        <div className='content flex'>
                            <div className='left'>
                                <div className='img'>
                                    <img src={value.cover} alt=""/>
                                </div>
                            </div>
                            <div className='text'>
                                <h1>{value.coursesName}</h1>
                                {/* <h3>{value.courTeacher}</h3> */}
                                <div className='rate'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <label htmlFor=''>(5.0)</label>
                                   
                                </div>
                                <div  className='details'>
                                   {value.courTeacher.map((details)=>(
                                    <>
                                    <div className='box'>
                                        <div className='dimg'>
                                            <img src={details.dcover} alt=""/>
                                        </div>
                                        <div className='para'>
                                            <h4>{details.name}</h4>
                                        </div>
                                        </div>
                                    <span>{details.totalTime}</span>
                                    </>
                                   ))}
                                </div>
                            </div>
                        </div>
                        <div className='price'>
                            <h3>{value.priceAll} / {value.pricePer}</h3>
                        </div>
                        {/* <button className='outline-btn'>ENROLL NOW</button> */}
                        <button 
                      className='outline-btn' 
                      onClick={() => navigate('/pricing')}
                    >
                      ENROLL NOW
                    </button>
                    </div>
                 ) })
            }
        </div>
        
    </section>
  )
}

export default CourseCard


