import Hero from "./sections/Hero"
import AppShowcase from "./sections/AppShowcase"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"

const App = () => {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <AppShowcase/>
    <LogoSection/>
   </div>
  )
}

export default App