import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Screen from "./../Layout/Screen"
const Home = () => {
  return (
    <>
      <Navbar />
      <Screen>
        <Hero />
        <About />
        <div className=" h-screen"></div>
      </Screen>
    </>
  )
}

export default Home
