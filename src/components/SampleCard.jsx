import React from "react"

const SampleCard = ({ icon, title, des }) => {
  return (
    <div className=" bg-zinc-950  border border-zinc-700 hvr-sdw  rounded-xl p-3 w-[320px]">
      <div className="  flex flex-col gap-3">
        <div className="text-2xl text-blue-600">{icon}</div>
        <h1>{title}</h1>
        <p className=" opacity-60">{des}</p>
      </div>
    </div>
  )
}

export default SampleCard
