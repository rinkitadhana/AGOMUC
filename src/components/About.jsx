import { FaPlay } from "react-icons/fa"
import MiniHeading from "./MiniHeading"
import Title from "./Title"

const About = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="About Us" des="Lorem ipsum dolor sit, amet consectetur" />
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Story Behind Startup" />
        <div className=" flex gap-4 items-center">
          <div className=" rounded-xl border border-zinc-700 p-4 bg-zinc-950 flex flex-col gap-1 w-[60%]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus quod maxime ducimus quidem, debitis, soluta cumque nulla
              iste saepe quis veniam quos odio facere reiciendis natus laborum
              nam minima.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              minus quod maxime ducimus quidem, debitis, soluta cumque nulla
              iste saepe quis veniam quos odio facere reiciendis natus laborum
              nam minima.
            </p>
          </div>
          <div className=" bg-zinc-950 w-[40%] border flex flex-col gap-2 border-zinc-700 rounded-xl p-4 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              accusamus quo expedita numquam consequuntur quam similique impedit
              amet illum. Obcaecati, officia quas.
            </p>
            <div className=" group/video w-fit flex gap-4 items-center">
              <a
                href=""
                className=" cursor-pointer border rounded-full border-blue-600 bg-blue-600 p-3 text-xl text-white w-fit flex gap-1 hvr-sdw "
              >
                <FaPlay />
              </a>
              <p className=" transition duration-300 group-hover/video:opacity-100 text-sm opacity-75">
                Watch Our Journey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <MiniHeading title="What we do" />
        <div className=" rounded-xl border border-zinc-700 p-4 bg-zinc-950 flex flex-col gap-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus quod maxime ducimus quidem, debitis, soluta cumque nulla iste
            saepe quis veniam quos odio facere reiciendis natus laborum nam
            minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam minus quod maxime ducimus quidem, debitis, soluta cumque
            nulla iste saepe quis veniam quos odio facere reiciendis natus
            laborum nam minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minus quod maxime ducimus quidem, debitis, soluta cumque nulla iste
            saepe quis veniam quos odio facere reiciendis natus laborum nam
            minima. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam minus quod maxime ducimus quidem, debitis, soluta cumque
            nulla iste saepe quis veniam quos odio facere reiciendis natus
            laborum nam minima.nulla iste saepe quis veniam quos odio facere
            reiciendis natus laborum nam minima.
          </p>
        </div>
      </div>
      {/* <div className=" flex gap-6 items-center  p-2 bg-black hvr-sdw rounded-xl border border-zinc-700 ">
        <div className=" basis-[35%]">
          <img
            className=" rounded-xl"
            src="https://img.freepik.com/premium-photo/face-young-woman-face-white-background-generative-ai_849906-20048.jpg"
          />
        </div>
        <div className=" flex flex-col gap-1 basis-[65%]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            doloribus fuga eligendi perferendis fugit sapiente eveniet vero
            aliquid, hic commodi, labore, nam sed sunt id quidem voluptates non!
            Saepe, numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            doloribus fuga eligendi perferendis fugit sapiente eveniet vero
            aliquid, hic commodi, labore, nam sed sunt id quidem voluptates non!
            Saepe, numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            doloribus fuga eligendi perferendis fugit sapiente eveniet vero
            aliquid, hic commodi, labore, nam sed sunt id quidem voluptates non!
            Saepe, numquam.
          </p>
        </div>
      </div> */}
    </section>
  )
}

export default About
