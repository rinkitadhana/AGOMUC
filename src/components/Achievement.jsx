import { useState, useEffect } from "react"
import Title from "./Title"

const Achievement = () => {
  const [position, setPosition] = useState(0)

  const testimonials = [
    {
      id: 1,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 2,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 3,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 4,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 5,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 6,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 7,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
    {
      id: 8,
      img: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/6fe2515d3fca41364b8e40103316253d.webp",
      title: " Lorem ipsum dolor sit",
      des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illo repellendus incidunt quisquam fugit exercitationem! Quisquam magni cupiditate neque suscipit!",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev + 1
        return newPosition >= testimonials.length ? 0 : newPosition
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="flex flex-col gap-8">
      <Title
        title="Achievement"
        des="Lorem ipsum dolor sit, amet consectetur"
      />
      <div className="w-full max-w-6xl mx-auto overflow-hidden px-4">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${position * 33.33}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="hvr-sdw flex-shrink-0 w-1/3 bg-zinc-950 border border-zinc-700 rounded-lg shadow-lg"
                style={{ minWidth: "calc(33.33% - 1rem)" }}
              >
                <div className="p-4 flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold">
                    {testimonial.title}
                  </h1>
                  <img
                    src={testimonial.img}
                    alt="img"
                    className="border border-zinc-700 rounded-xl"
                  />
                  <p className="opacity-75">{testimonial.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement
