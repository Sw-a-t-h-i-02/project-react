import React from 'react'
import "./footer.css"
import { blog } from '../dummydata'

const Footer = () => {
  return (
    <>
  <section className='newletter'>
    <div className='container flexSB'>
        <div className='left row'>
            <h1>Newsletter -Stay tune and get the latest update
            </h1>
            <span>far far way , behind the world mountains</span>
        </div>
        <div className='right row'>
            <input type='text' placeholder='Enter email address '/>
            <i className='fa fa-paper-plane'></i>
        </div>
    </div>
  </section>
  <footer>
    <div className='container padding'>
        <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>Online Education and Learnin</span>
            <p>cnbdhsleyriuyqwporifnjdbvhjgfuygiweourfx vnbxhdguserkesfhcjhxbdvs,mueriosyoeiughjdddmnhtkjgekjrh</p>
            <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-youtube icon'></i>
        </div>
        <div className='box link'>
            <h3>Explore</h3>
            <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                </ul>
        </div>
        <div className='box link'>
            <h3>Quick links</h3>
            <ul>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                <li>About Us</li>
                </ul>
        </div>
        <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0,3).map((value)=>{
                <div className='items flexSB'>
                    <div className='img'>
                        <img src={value.cover} alt=""/>
                    </div>
                    <div className='text'>
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor=''>{value.type}</label>
                    </span>
                    <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor=''>{value.date}</label>
                    </span>
                    <h4>{value.title}</h4>
                    </div>
                </div>

            })}
        </div>
        <div className='box last'>
            <h3>Have a questions</h3>
            <ul>
                <li>
                    <i className='fa fa-map'></i>
                    Kukatpally , Phase1 , road number3 , 3rd building 2nd floor
                </li>
                <li>
                    <i className='fa fa-phone'></i>
                    +91 6281282021
                </li>
                
                <li>
                    <i className='fa fa-paper-plane'></i>
                  ACADEMIA@gmail.com
                </li>
                
            </ul>

        </div>

    </div>
  </footer>
  <div className='legal'>
    <p>Copyright @2023 All Rights Reserved | this template is made with <i className='fa fa-heart'></i>by swathi</p>
  </div>
  </>

  )
}

export default Footer