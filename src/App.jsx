
import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import Certifications from './Components/Certifications/Certifications'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Header from './Components/Header/Header'
import MyProjects from './Components/MyProjects/MyProjects'
import Navigation from './Components/Navigation/Navigation'
import Skills from './Components/Skills/Skills'

function App() {


  return (
    <>
     <Navigation/>
     <Header/>
     <AboutMe/>
     <MyProjects/>
     <Skills/>
     <Certifications/>
     <Experience/>
     <Contact/>
    </>
  )
}

export default App
