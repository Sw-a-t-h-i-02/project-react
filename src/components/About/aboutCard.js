


import React from "react"
import "./about.css"
import { homeAbout } from "../dummydata"
import Awrapper from "./Awrapper"
import Title from "../Title/title"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://th.bing.com/th/id/OIP.RXnYb-xRuf4qUglhhafjlwHaFR?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt=''/>
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