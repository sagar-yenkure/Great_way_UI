import React from "react";
import {
  FaJava,
  FaPython,
  FaAngular,
  FaReact,
  FaMicrosoft,
  FaSalesforce,
  FaAws,
  FaJira,
  FaCloud,
  FaDocker,
} from "react-icons/fa";
import {
  DiGit,
  DiMysql,
  DiLinux,
  DiWordpress,
  DiAndroid,
} from "react-icons/di";
import { SiSpringboot, SiHibernate, SiJest } from "react-icons/si";
import { GrOracle, GrHadoop } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";

const Tech = () => {
  const Tech_list = [
    { logo: FaJava, name: "Java" },
    { logo: IoLogoJavascript, name: "Javascript" },
    { logo: FaPython, name: "Python" },
    { logo: GrOracle, name: "Oracle" },
    { logo: FaAngular, name: "Angular" },
    { logo: FaReact, name: "React" },
    { logo: FaMicrosoft, name: "Microsoft" },
    { logo: FaSalesforce, name: "Salesforce" },
    { logo: GrHadoop, name: "Hadoop" },
    { logo: SiSpringboot, name: "Spring Boot" },
    { logo: DiMysql, name: "MySQL" },
    { logo: SiHibernate, name: "Hibernate" },
    { logo: DiGit, name: "Git" },
    { logo: DiLinux, name: "Linux" },
    { logo: DiWordpress, name: "Wordpress" },
    { logo: DiAndroid, name: "Android" },
    { logo: FaAws, name: "AWS" },
    { logo: FaJira, name: "Jira" },
    { logo: FaCloud, name: "Cloud" },
    { logo: SiJest, name: "Jest" },
    { logo: FaDocker, name: "Docker" },
    { logo: RiOpenaiFill, name: "OpenAI" },
  ];

  return (
    <main className="bg-gray-700 ">
      <div className="flex p-8 justify-center text-white">
        <h1 className="text-4xl font-black">Technology's we working with</h1>
      </div>
      <div className="Tech_list  flex justify-evenly flex-wrap gap-5 items-center ">
        {Tech_list.map((TechIcon) => (
          <div
            key={TechIcon.name}
            className="w-[7rem] h-[7rem] hover:scale-110 hover:cursor-pointer transition-all ease-out bg-white flex-col flex rounded-full justify-center items-center"
          >
            <TechIcon.logo size={42} />
            {TechIcon.name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tech;
