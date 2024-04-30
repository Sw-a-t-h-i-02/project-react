

import React from 'react'
import { Link } from 'react-router-dom'




const Head = () => {
    return (
      <>
        <section className='head'>
          <div className='container flexSB'>
            <div className='logo'>
              <h1>KHAN ACADEMY</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </div>
  
            <div className='social'>
              {/* <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i> */}
              <Link to={"https://www.linkedin.com/feed/?trk=404_page"}><i className='fab fa-linkedin icon'></i></Link>
             <Link to={"https://github.com/"}><i className='fab fa-github icon'></i></Link>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Head

