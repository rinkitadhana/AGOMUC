import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Screen from "./../Layout/Screen"
const Home = () => {
  return (
    <>
      <Navbar />
      <Screen>
        <div className=" flex flex-col gap-8">
          <Hero />
          <About />
          <div className=" h-screen"></div>
        </div>
      </Screen>
    </>
  )
}

export default Home
