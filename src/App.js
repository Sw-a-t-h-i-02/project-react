import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import "./App.css"
import Home from './components/backgroundcomponent/home'
import About from './components/About/About'
import CourseHome from './components/AllCourses/CourseHome'




const App = () => {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/allCourses' Component={CourseHome}/>
      </Routes>
      </Router>
    </div>
  )
}


export default App