import Hero from "./sections/Hero"
import AppShowcase from "./sections/AppShowcase"
import NavBar from "./components/NavBar"
import LogoSection from "./sections/LogoSection"
import FeatureCards from "./sections/FeatureCards"

const App = () => {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <AppShowcase/>
    <LogoSection/>
    <FeatureCards/>
   </div>
  )
}

export default App