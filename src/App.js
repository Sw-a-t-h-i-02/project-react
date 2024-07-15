import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import "./App.css"
import Home from './components/backgroundcomponent/home'
import About from './components/About/About'
import CourseHome from './components/AllCourses/CourseHome'
import Team from './components/Team/Team'
import Price from './components/Pricing/Price'
import Blog from './components/Blog/Blog'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/allCourses' Component={CourseHome}/>
      <Route path='/team'  Component={Team}/>
      <Route path='/pricing' Component={Price}/>
      <Route path='/journal' Component={Blog}/>
      <Route path='/contact' Component={Contact}/>
            </Routes>
            <Footer/>
      </Router>
    </div>
  )
}
export default App