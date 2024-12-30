const Title = ({ title, des }) => {
  return (
    <div className=" flex flex-col gap-1 items-center">
      <h1 className=" sec-head ">{title}</h1>
      <p className=" text-center text-sm font-medium opacity-70">{des}</p>
    </div>
  )
}

export default Title
