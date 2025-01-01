import React from "react"
import Title from "./Title"

const Progress = () => {
  const timelineData = [
    {
      id: 1,
      year: "2000",
      description: "Briefly elaborate on what you want to discuss.",
    },
    {
      id: 2,
      year: "2020",
      description: "Briefly elaborate on what you want to discuss.",
    },
    {
      id: 3,
      year: "2040",
      description: "Briefly elaborate on what you want to discuss.",
    },
    {
      id: 4,
      year: "2040",
      description: "Briefly elaborate on what you want to discuss.",
    },
  ]

  return (
    <section className=" flex flex-col gap-8">
      <Title title="Progress" des="Lorem ipsum dolor sit, amet consectetur" />

      <div className="w-full  mx-auto p-10">
        <div className="relative pt-16">
          {/* Horizontal dotted line */}
          <div className="absolute top-0 left-0 w-full flex items-center justify-center">
            <div className="w-full border-t-2 border-dotted border-white"></div>
          </div>

          {/* Timeline points */}
          <div className="relative flex justify-between">
            {timelineData.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center"
              >
                {/* Vertical dotted line */}
                <div className="absolute -top-16 h-16 border-l-2 border-dotted border-white"></div>

                {/* Circle point */}
                <div className="w-4 h-4 bg-blue-600 border-2 border-blue-600 rounded-full -mt-2 z-10"></div>

                {/* Year and description */}
                <div className="mt-8 w-48">
                  <h2 className="text-3xl font-bold text-center mb-4">
                    {item.year}
                  </h2>
                  <p className="text-center opacity-75 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress
