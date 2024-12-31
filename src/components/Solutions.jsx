import Title from "./Title"

const Solutions = () => {
  return (
    <section className=" flex flex-col gap-8">
      <Title title="Solutions" des="Lorem ipsum dolor sit amet." />
      <div className=" flex gap-6 items-center  p-2 bg-black ">
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
        <div className=" basis-[35%]">
          <img
            className=" rounded-xl"
            src="https://img.freepik.com/premium-photo/face-young-woman-face-white-background-generative-ai_849906-20048.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default Solutions
