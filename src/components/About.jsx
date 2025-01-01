import { FaPlay } from "react-icons/fa"
import MiniHeading from "./MiniHeading"
import Title from "./Title"
import { about1, about2 } from "../Data/Data"

const About = () => {
  return (
    <section className=" flex flex-col gap-1">
      <Title title="About Us" />
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Story Behind Startup" />
        <div className=" flex md:flex-row flex-col gap-4 items-center">
          <div className=" rounded-xl text-lg  p-4 backdrop-blur-sm  flex flex-col gap-1 md:w-[60%]">
            <p>{about1}</p>
          </div>
          <div className=" backdrop-blur-sm  md:w-[40%] border flex flex-col gap-2 border-zinc-700 rounded-xl p-4 ">
            <video autoPlay className=" rounded-md" width="900" loop muted>
              <source src="/video/Story Behind Startup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MiniHeading title="What we do" />
        <div className=" rounded-xl  text-lg p-4 backdrop-blur-sm  flex flex-col gap-1">
          <p>{about2}</p>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Beyond today" />
        <div className=" flex md:flex-row flex-col items-center gap-4">
          <div className=" md:w-[40%] backdrop-blur-sm   rounded-xl p-2">
            <video autoPlay className=" rounded-md" width="900" loop>
              <source src="/video/about us 3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className=" rounded-xl text-lg  p-4 backdrop-blur-sm flex flex-col gap-1 md:w-[60%]">
            <ul className=" flex flex-col gap-6">
              <li>
                •{" "}
                <span className=" font-semibold">Blockchain for Justice:</span>{" "}
                Secure, tamper-proof evidence systems.
              </li>
              <li>
                •{" "}
                <span className=" font-semibold">3D omni verse Forensics:</span>{" "}
                Hyper-realistic crime scene recreations.
              </li>
              <li>
                • <span className=" font-semibold">AI for Justice:</span>{" "}
                Accelerating resolutions for delayed cases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
