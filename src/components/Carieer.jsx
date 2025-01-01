import React from "react"
import Title from "./Title"
import { PiSuitcaseSimpleBold } from "react-icons/pi"

const Carieer = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.goenhance.ai/user/2024/06/14/18798ab8-cddf-4fd3-8e5f-9bc91a4e7069_0.jpg",
      title: "Lorem ipsum dolor sit amet.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores sint eum, sit ipsa recusandae.",
    },
    {
      id: 2,
      img: "https://cdn.goenhance.ai/user/2024/06/14/18798ab8-cddf-4fd3-8e5f-9bc91a4e7069_0.jpg",
      title: "Lorem ipsum dolor sit amet.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores sint eum, sit ipsa recusandae.",
    },
    {
      id: 3,
      img: "https://cdn.goenhance.ai/user/2024/06/14/18798ab8-cddf-4fd3-8e5f-9bc91a4e7069_0.jpg",
      title: "Lorem ipsum dolor sit amet.",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maiores sint eum, sit ipsa recusandae.",
    },
  ]
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Carieer" des="Lorem ipsum dolor sit, amet consectetur" />
      <div className=" flex md:flex-row flex-col gap-4 items-center">
        {data.map((data) => (
          <div
            key={data.id}
            className=" bg-zinc-950  p-4 rounded-xl border border-zinc-700 flex flex-col gap-3"
          >
            <img
              className=" rounded-xl border border-zinc-700"
              src={data.img}
            />
            <h1 className=" text-2xl font-semibold">{data.title}</h1>
            <p className=" opacity-70">{data.des}</p>
            <a
              href=""
              className=" flex gap-2 items-center px-3 py-2  bg-blue-600 border border-blue-600 rounded-xl hvr-sdw w-fit"
            >
              <div className=" text-xl">
                {" "}
                <PiSuitcaseSimpleBold />
              </div>

              <span>Apply</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Carieer
