import React from 'react'
import Title from '../Title/title'
import { coursesCard } from '../dummydata'
import OnlineCourses from '../AllCourses/OnlineCourses'

const HAbout = () => {
  return (
    <>
    <section className='homeAbout' >
        <div className='container'>
            <Title subtitle="OUR COURSES " title="Explore Our Popular Online Courses"/>
        <div className='coursesCard'>
        <div  className='grid2'>
            {
                coursesCard.slice(0,3).map((value)=>{
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
                        <button className='outline-btn'>ENROLL NOW</button>
                    </div>
                 ) })
            }
        </div>
        
    </div>
        </div>
    </section>
    <OnlineCourses/>
    </>
  )
}

export default HAbout