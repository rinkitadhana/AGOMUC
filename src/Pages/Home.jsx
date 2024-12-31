import About from "../components/About"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Sample from "../components/Sample"
import Sample2 from "../components/Sample2"
import Solutions from "../components/Solutions"
import Screen from "./../Layout/Screen"
const Home = () => {
  return (
    <div className=" select-none">
      <Navbar />
      <Screen>
        <div className=" flex flex-col gap-10">
          <Hero />
          <About />
          <Solutions />
          <Sample />
          <Sample2 />
        </div>
      </Screen>
      <Footer />
    </div>
  )
}

export default Home
