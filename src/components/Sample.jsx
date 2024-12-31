import { sampleData } from "../Data/Data"
import SampleCard from "./sampleCard"
import Title from "./Title"

const Sample = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Sample" des="Lorem ipsum dolor sit amet." />
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
    </section>
  )
}

export default Sample
