import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { navLinks } from "../Data/Data"
import LocalTime from "../utils/LocalTime"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className=" fixed top-0 w-full z-10">
      <div className=" font-sans  select-none text-white flex justify-between items-center py-2 md:px-32 px-2 border-b border-zinc-800 bg-black/50 backdrop-blur-md ">
        <div className=" flex gap-2 items-center">
          <img className=" size-10" src="public\img\logo\logo.png" />
          <h1 className=" text-lg font-popins font-medium">AGOMUC</h1>
        </div>

        <div className=" hidden  md:flex items-center gap-2">
          {navLinks.map((nav) => (
            <a
              className="  hover:bg-zinc-900 rounded-full px-3 py-2 font-inter text-sm transition duration-300  opacity-100"
              key={nav.id}
              href={nav.link}
            >
              {nav.name}
            </a>
          ))}
        </div>
        {/* <div className="  flex gap-1 items-center text-sm  font-medium opacity-60">
        <span>Local Time</span>
        <LocalTime />
      </div> */}
        <a className="  transition duration-300 cursor-pointer bg-blue-700 rounded-full px-2.5  py-1 border border-blue-600 hvr-sdw">
          Get Started
        </a>
      </div>
    </nav>
  )
}

export default Navbar
