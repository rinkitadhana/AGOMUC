import MatrixRain from "./components/MatrixRain"
import Navbar from "./components/Navbar"
import Screen from "./Layout/Screen"
const App = () => {
  return (
    <>
      <Screen>
        <MatrixRain />
        <Navbar />
      </Screen>
    </>
  )
}

export default App
