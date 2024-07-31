

import React from 'react'
import { Link } from 'react-router-dom'




const Head = () => {
    return (
      <>
        <section className='head'>
          <div className='container flexSB'>
            <div className='logo'>
              <h1 className='mainheading'>Swathi ACADEMY</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </div>
  
            <div className='social'>
              {/* <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i> */}
              <Link to={"https://www.linkedin.com/in/kummari-swathi-ba0325299/"}><i className='fab fa-linkedin icon'></i></Link>
             <Link to={"https://github.com/Sw-a-t-h-i-02"}><i className='fab fa-github icon'></i></Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  export default Head

