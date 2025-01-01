import React from "react"
import Title from "./Title"

const Vision = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Vision" des="Lorem ipsum dolor sit, amet consectetur" />
      <div className=" flex gap-4 flex-row ">
        <div className=" border w-[50%] h-[300px]"></div>
        <div className=" border w-[50%] h-[300px]"></div>
      </div>
    </section>
  )
}

export default Vision
