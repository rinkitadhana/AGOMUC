import { IoArrowForward } from "react-icons/io5"
import RotatingCube from "./RotatingCube"
import { heroDes, heroHead } from "../Data/Data"

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse gap-6 my-28 px-2 md:px-0  items-center">
      <div className=" basis-[60%] flex flex-col gap-6">
        <h1 className=" md:text-6xl text-3xl font-semibold text-white/80 ">
          {heroHead}
        </h1>
        <p className="md:text-lg text-base text-zinc-200 font-medium opacity-75">
          {heroDes}
        </p>
        <div className=" select-none flex gap-5 items-center">
          <a className="transition duration-300 cursor-pointer bg-blue-700 rounded-full px-3.5  py-2 border border-blue-600 hvr-sdw">
            About us
          </a>
          <a className=" transition duration-300 group/arr flex gap-2 items-center cursor-pointer bg-black hover:bg-zinc-800 border border-black hover:border-zinc-800 px-3.5  py-2  rounded-full">
            <span>Solutions</span>
            <div className=" group-hover/arr:-rotate-45 transition duration-300">
              <IoArrowForward />
            </div>
          </a>
        </div>
      </div>
      <div className=" select-none basis-[40%]">
        <RotatingCube size={3.5} />
      </div>
    </section>
  )
}

export default Hero
