import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Screen from "./../Layout/Screen"
const Home = () => {
  return (
    <>
      <Navbar />
      <Screen>
        <Hero />
      </Screen>
    </>
  )
}

export default Home
