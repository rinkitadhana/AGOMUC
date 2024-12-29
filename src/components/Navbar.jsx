import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { navLinks } from "../Data/Data"
import LocalTime from "../utils/LocalTime"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className=" fixed top-0 w-full z-10">
      <div className=" font-sans  select-none text-white flex justify-between items-center py-2.5 px-40 border-b border-zinc-800 bg-black/50 backdrop-blur-md ">
        <h1 className=" text-lg font-popins font-medium">Agomuc.</h1>
        <div className=" flex items-center gap-8">
          {navLinks.map((nav) => (
            <a
              className=" font-inter text-sm transition duration-300 opacity-60  hover:opacity-100  "
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
