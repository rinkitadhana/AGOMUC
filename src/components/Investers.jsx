import { sampleData } from "../Data/Data"
import MiniHeading from "./MiniHeading"
import SampleCard from "./sampleCard"
import Title from "./Title"

const Investers = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Investers" des="Lorem ipsum dolor sit amet." />
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Why Invest in us" />
        <div className="flex flex-wrap justify-center gap-6 items-center p-2 ">
          {sampleData.map((data) => (
            <SampleCard
              key={data.id}
              icon={<data.icon />}
              title={data.title}
              des={data.des}
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Revenue Model" />
      </div>
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Projected ROI" />
        <div className=" border w-[50%] h-[300px]"></div>
      </div>
      <div className=" flex flex-col gap-4">
        <MiniHeading title="Use of funds" />
      </div>
    </section>
  )
}

export default Investers
