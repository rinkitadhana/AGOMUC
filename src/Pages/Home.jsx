import About from "../components/About"
import Achievement from "../components/Achievement"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Progress from "../components/Progress"
import Solutions from "../components/Solutions"
import Vision from "../components/Vision"
import Screen from "./../Layout/Screen"
import Investers from "../components/Investers"
import Carieer from "../components/Carieer"
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Screen>
        <div className=" flex flex-col gap-10">
          <Hero />
          <About />
          <Solutions />
          <Vision />
          <Progress />
          <Achievement />
          <Investers />
          <Carieer />
        </div>
      </Screen>
      <Footer />
    </div>
  )
}

export default Home
