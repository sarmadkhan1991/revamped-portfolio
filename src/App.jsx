import Hero from "./sections/Hero"
import AppShowcase from "./sections/AppShowcase"
import NavBar from "./components/NavBar"

const App = () => {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <AppShowcase/>
   </div>
  )
}

export default App