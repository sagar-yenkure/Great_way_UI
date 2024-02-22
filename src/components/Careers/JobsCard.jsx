const JobsCard = () => {

  const cardData = [
    {
      position: "Web Developer",
      jobDescription:
        "As a Web Developer, you will be responsible for designing, coding, and maintaining websites and web applications. You will work closely with clients, designers, and other team members to create user-friendly and visually appealing online experiences.",
      Requirement: [
        "Role Category: Software Development",
        "Employment Type: Full Time, Permanent",
        "Skills: HTML, CSS, Javascript and Angular/React Js",
        "Experience: 0-4 year",
        "Location :Kharadi",
      ],
      education: "UG: B.Tech/B.E. in Computers, Any Graduate",
    },
    {
        position: "Full Stack Developer",
        jobDescription:
          "As a Full Stack Developer, you will be responsible for designing, developing, and maintaining web applications. You will work on both the front-end and back-end components, collaborating with cross-functional teams to deliver high-quality software solutions.",
        Requirement: [
          "Employment Type: Full Time, Permanent",
          "Role Category: Software Development",
          "Skills: HTML, CSS, Javascript, Java, Spring boot, SQL etc",
          "Experience: 0-4 year",
          "Location :Kharadi",
        ],
        education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      },
      {
        position: ".Net Developer",
        jobDescription:
          "As a .NET Developer, you will play a crucial role in designing, developing, and maintaining software applications using the Microsoft .NET framework. You will collaborate with cross-functional teams, including software architects, testers, and business analysts, to deliver high-quality software solutions that meet business requirements.",
        Requirement: [
          "Employment Type: Full Time, Permanent",
          "Skills Required c#, ASP mvc, SQL etc",
          "Experience: 0-2 year",
          "Location :Kharadi, Pune",
        ],
        education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      },
      {
        position: "Java Developer",
        jobDescription:
          "As a Java Developer, you will play a pivotal role in the development and enhancement of enterprise-level Java applications. You'll collaborate with a team of software engineers and architects to design and implement robust solutions that meet business requirements. Your expertise in Java programming, along with your problem-solving skills, will contribute to the success of our projects.",
        Requirement: [
          "Employment Type: Full Time, Permanent",
          "Skills Required Core Java, Spring boot, Hibernate, SQL etc",
          "Experience: 2-4 year",
          "Location :Kharadi, Pune",
        ],
        education: "UG: B.Tech/B.E. in Computers, Any Graduate",
      },
      {
        position: "Digital Marketing",
        jobDescription:
          "As a Digital Marketing Specialist, you will be responsible for developing and implementing online marketing strategies to promote products, services, or brands. You will leverage various digital channels to drive traffic, engage audiences, and achieve marketing objectives.",
        Requirement: [
          "Employment Type: Full Time, Permanent",
          "Contribute to the maintenance and optimization of the company website, including SEO optimization and content updates.",
          "Experience: 2-4 year",
          "Location :Kharadi, Pune",
        ],
        education: "Any Graduate",
      },
      {
        position: "React Developer",
        jobDescription:
          "As a React Developer, you will be responsible for designing, implementing, and maintaining user interfaces for web applications using React.js. You'll work closely with a team of frontend developers, designers, and backend engineers to deliver engaging and responsive user experiences. Your expertise in React, along with your knowledge of modern web development technologies, will be essential in creating intuitive and scalable UI solutions.",
        Requirement: [
          "Develop user interfaces for web applications using React.js and related technologies.",
          "Write clean, reusable, and well-documented code following best practices and coding standards.",
          "Experience: 2-4 year",
          "Location :Kharadi, Pune",
        ],
        education: "Any Graduate",
      },
  ];


  return (
    <div className="flex flex-col justify-center items-center p-6 ">
      {/* card page title */}
      <h1 className="text-5xl font-headingFont font-extrabold text-violet-500">
        Recent Openings
      </h1>

      {/* Multiple Cards */}
      <div className="w-[100%] flex flex-wrap mt-10 gap-12 justify-around items-center">
        {/* card info */}
        {cardData.map((cardItem) => (
          <div key={cardItem.position} className="md:w-[350px] w-[230px] p-4 bg-opacity-20 bg-slate-300 rounded-xl flex flex-col gap-4 border-2 border-t-orange-500 border-l-violet-400 border-b-blue-700 border-r-pink-500 shadow-inner shadow-pink-500 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-linear">
            {/* Position section */}
            <h2 className="text-2xl font-bold font-headingFont text-indigo-400 text-center">
             {cardItem.position}
            </h2>
            {/* Description */}
            <p className="text-slate-400 font-navlistFont text-sm">
              {cardItem.jobDescription}
            </p>

            {/* Requirent Types */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-navlistFont font-bold text-indigo-400">
                Requirement:
              </h1>
              <ul className="list-disc p-3">
                {
                    cardItem.Requirement.map((reqList)=>(
                        <li key={reqList} className="text-slate-400 font-navlistFont text-sm">
                            {reqList}
                        </li>
                    ))
                }
              </ul>
            </div>

            {/* Education */}
            <div>
              <h1 className="text-xl text-indigo-400 font-bold">Education</h1>
              {/* Education Description */}
              <p className="text-slate-400 text-sm font-navlistFont">
               {cardItem.education}
              </p>
            </div>

            {/* Apply Button */}
            <button className="w-[100%] bg-gradient-to-tr text-lg from-green-300 to-blue-400 p-2 rounded-md text-violet-500 font-headingFont font-semibold hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-500 hover:text-green-500 transition-all duration-150 ease-linear">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCard;
