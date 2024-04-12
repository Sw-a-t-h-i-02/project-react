


import React from "react"
import "./about.css"
import { homeAbout } from "../dummydata"
import Awrapper from "./Awrapper"
import Title from "../Title/title"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className="aboutbgimg"></div>
        <div className='container flexSB'>
          <div className='left row'>
            <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63076831768815001d0b2344.jpg" alt=""/>
          </div>
          <div className='right row'>
            < Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard