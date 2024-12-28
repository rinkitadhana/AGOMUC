import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { navLinks } from "../Data/Data"
import LocalTime from "../utils/LocalTime"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className=" font-inter select-none text-white flex justify-between items-center py-3.5 px-40 border-b border-zinc-700 bg-black/70 backdrop-blur-sm ">
      <h1 className=" text-lg font-medium">AGOMUC</h1>
      <div className=" flex items-center gap-8">
        {navLinks.map((nav) => (
          <a
            className=" transition duration-300 opacity-60  hover:opacity-100  "
            key={nav.id}
            href={nav.link}
          >
            {nav.name}
          </a>
        ))}
      </div>
      <div className="  flex gap-1 items-center text-sm  font-medium opacity-90">
        <span>Local Time</span>
        <LocalTime />
      </div>
    </nav>
  )
}

export default Navbar
