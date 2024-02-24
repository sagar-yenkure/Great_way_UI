
const Section1 = ({obj}) => {
  return (
    <div className="w-[100%] bg-[linear-gradient(to_top,_#fbc2eb_0%,_#a6c1ee_100%)] relative py-20 flex justify-center items-center mt-10">
        <div className="w-[90%] flex flex-wrap justify-between gap-10 items-center">
          {/* left or the image section of the first section */}
          <div className="flex-3 flex justify-center items-center">
            <img
              className="w-[90%] rounded-lg cursor cursor-pointer"
              src={obj.imageUrl}
              alt=""
            />
          </div>

          {/* right or content section of the first section */}
          <div className="flex-1 flex justify-center flex-col ">
            <h2 className="text-4xl mb-4 font-headingFont font-bold text-violet-700">
              {obj.content.heading}
            </h2>
            <p className="text-md font-navlistFont font-semibold text-slate-800">{obj.content.message}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Section1