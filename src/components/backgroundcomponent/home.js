

import React from 'react'
import Hero from './hero'
import AboutCard from '../About/aboutCard'

import HAbout from './HAbout'

import Test from './Testing/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'
import CourseCard from '../AllCourses/CourseCard'

const Home = () => {
  return (
   <>

    <Hero/>
    {/* <AboutCard /> */}
    <HAbout />
    <Test/>
    <Hblog/>
    <Hprice/>
    {/* <CourseCard/> */}
   
   </>
  )
}
export default Home