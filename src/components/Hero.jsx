import { IoArrowForward } from "react-icons/io5"
import RotatingCube from "./RotatingCube"

const Hero = () => {
  return (
    <section className="flex gap-6 my-28 items-center">
      <div className=" basis-[60%] flex flex-col gap-6">
        <h1 className="text-6xl font-semibold text-white/80">AGOMUC PROGRAM</h1>
        <p className="text-lg text-zinc-200 font-medium opacity-75">
          At AGOMUC, we leverage advanced AI and ML to transform crime
          prevention, providing real-time analytics and safety features to
          enhance community security.
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
        <RotatingCube />
      </div>
    </section>
  )
}

export default Hero
