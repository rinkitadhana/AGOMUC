import { useState } from "react"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <section className=" md:p-4 p-3 ">
      <nav className="flex justify-between items-center border-2 border-white/30 py-3 md:px-6 px-4 rounded-full md:w-[80%] mx-auto transition-all  backdrop-blur-sm hover:backdrop-blur-xl">
        <h1 className=" text-lg font-popins ">Agomuc</h1>
        <div className="md:flex gap-4 hidden ">
          <a className=" cursor-pointer font-medium hover:text-green-400 ">
            About
          </a>
          <a className=" cursor-pointer font-medium hover:text-green-400 ">
            Service
          </a>
          <a className=" cursor-pointer font-medium hover:text-green-400 ">
            Contact
          </a>
        </div>
        <div
          onClick={() => setShow((prev) => !prev)}
          className=" md:hidden text-3xl "
        >
          <IoMenu />
        </div>
      </nav>
      {show && (
        <div className="flex flex-col gap-4 border-2 rounded-xl my-2 p-3 md:hidden backdrop-blur-sm border-white/30">
          <a className=" cursor-pointer font-medium ">About</a>
          <a className=" cursor-pointer font-medium ">Service</a>
          <a className=" cursor-pointer font-medium ">Contact</a>
        </div>
      )}
    </section>
  )
}

export default Navbar
