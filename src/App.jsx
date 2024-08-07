import Hero from "./components/Hero/Hero"
import Navbar from "./components/NavBar/Navbar"
import './App.css'
import Skills from "./components/skills/Skills"

const App =()=>{
  return(
    <>
    <Navbar/>
    <div>
      <Hero/>
      <Skills/>
    </div>
    </>
  )
}

export default App