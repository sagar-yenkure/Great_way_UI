import {
  DiAndroid,
  DiMysql,
  DiWordpress
} from "react-icons/di";
import {
  FaAngular,
  FaAws,
  FaCloud,
  FaJava,
  FaPython,
  FaReact
} from "react-icons/fa";
import { GrHadoop, GrOracle } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";
import { SiHibernate, SiSpringboot } from "react-icons/si";

const Tech = () => {
  const Tech_list = [
    { logo: FaJava, name: "Java" },
    { logo: IoLogoJavascript, name: "Javascript" },
    { logo: FaPython, name: "Python" },
    { logo: GrOracle, name: "Oracle" },
    { logo: FaAngular, name: "Angular" },
    { logo: FaReact, name: "React" },
    { logo: GrHadoop, name: "Hadoop" },
    { logo: SiSpringboot, name: "Spring Boot" },
    { logo: DiMysql, name: "MySQL" },
    { logo: SiHibernate, name: "Hibernate" },
    { logo: DiWordpress, name: "Wordpress" },
    { logo: DiAndroid, name: "Android" },
    { logo: FaAws, name: "AWS" },
    { logo: FaCloud, name: "Cloud" },
    { logo: RiOpenaiFill, name: "ML and AI" },
  ];

  return (
    <main className="bg-gray-700 ">
      <div className="flex p-8 justify-center text-white">
        <h1 className="text-4xl font-black">Technology's we working with</h1>
      </div>
      <div className="Tech_list p-10  flex justify-evenly flex-wrap gap-5 items-center ">
        {Tech_list.map((TechIcon) => (
          <div
            key={TechIcon.name}
            className="w-[9rem] h-[9rem] hover:scale-110 hover:cursor-pointer transition-all ease-out bg-white flex-col flex rounded-full justify-center items-center"
          >
            <TechIcon.logo size={48} />
            {TechIcon.name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tech;
