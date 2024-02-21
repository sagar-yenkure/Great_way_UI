import { Link } from "react-router-dom";

 export const  ServiceInfoSection=()=> {
    return (
      <div className="flex w-full h-[80vh] overflow-hidden flex-wrap gap-10 p-10 relative">
        {/* left side component*/}
        <div className="flex-1 flex justify-center flex-col gap-10 ">
          {/* heading of component */}
          <h1 className="text-2xl text-start font-bold font-headingFont text-violet-400">
            Providing your business with a quality IT service is our passion.
          </h1>

          {/* paragraph */}
          <p className="text-md text-start font-navlistFont text-slate-400 font-[500]">
            Greateway Software Pvt. Ltd. is a leading IT company providing
            comprehensive solutions. From software development and cloud
            services to cybersecurity and IT consulting, we offer a wide range
            of expertise. Our experienced team delivers tailored solutions,
            ensuring efficiency, reliability, and scalability, to help
            businesses thrive in the digital era.
          </p>
          {/* button code */}
          <Link
            to={"/"}
            class="md:w-[30%] w-[55%] px-5 py-2.5 relative rounded group text-white font-medium inline-block font-navlistFont"
          >
            <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span class="relative flex justify-center items-center">Learn More</span>
          </Link>
          <span className="w-[200px]  h-[200px] rounded-full blur-[100px] top-[-30px] left-[40px]  bg-violet-800 absolute"></span>
          <span className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-cyan-400 blur-[100px] absolute top-[67%] left-[35%]"></span>
        </div>

        {/* Right side component */}
        <div className="flex-2 flex items-center justify-center">
          <img
            className="md:w-[100%]  h-[200px] md:h-[350px] "
            src="https://img.freepik.com/free-photo/smiley-woman-having-video-call-office_23-2148908797.jpg?w=740&t=st=1708426107~exp=1708426707~hmac=3c2db8d5ae45bfe90ff462440482c25603c2d364363c04524f4be5ade5023410"
            alt=""
          />
        </div>
        <span className="w-[200px]  h-[200px] rounded-full blur-[100px] top-[-30px] left-[40px]  bg-violet-800 absolute"></span>
        <span className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-cyan-400 blur-[100px] absolute top-[67%] left-[35%]"></span>
      </div>
    );
  };