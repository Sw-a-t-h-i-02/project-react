import React from 'react'

import "./hero.css"
import Title from '../Title/title'

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='container'>
            <div className='row'>
                <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education"/>
                <p>Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system.  </p>
              <div className='button'> 
              <button className='primary-btn'>GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
              <button  >VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
                </div>

            </div>
        </div>
    </section>
    <div className='marigin'></div>
    </>
  )
}

export default Hero