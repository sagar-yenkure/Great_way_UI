import { DiAndroid, DiMysql, DiWordpress } from "react-icons/di";
import {
  FaAngular,
  FaAws,
  FaCloud,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { GrHadoop, GrOracle } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";
import { SiHibernate, SiSpringboot } from "react-icons/si";
import java_logo from "../Home/assets/svg/java-logo.svg";
import javascript_logo from "../Home/assets/svg/javascript-logo.svg";
import python_logo from "../Home/assets/svg/python-logo.svg";
import oracle_logo from "../Home/assets/svg/oracle-logo.svg";
import angular_logo from '../Home/assets/svg/angularjs-logo.svg'
import react_logo from '../Home/assets/svg/react-logo.svg'
import hadoop_logo from '../Home/assets/svg/hadoop-logo.svg'
import spring_bbot_logo from '../Home/assets/svg/spring-boot-logo.svg'
import mysql_logo from '../Home/assets/svg/mysql-logo.svg'
import hibernate_logo from '../Home/assets/svg/hibernate-logo.svg'
import wordpress_logo from '../Home/assets/svg/wordpress-logo.svg'
import android_logo from '../Home/assets/svg/android-logo.svg'
import aws_logo from '../Home/assets/svg/aws-logo.svg'
import cloud_logo from '../Home/assets/svg/cloud-logo.svg'
import Ai_logo from '../Home/assets/svg/Ai-logo.svg'

const Tech = () => {
  const Tech_list = [
    { logo: java_logo, name: "Java" },
    { logo: javascript_logo, name: "Javascript" },
    { logo: python_logo, name: "Python" },
    { logo: oracle_logo, name: "Oracle" },
    { logo: angular_logo, name: "Angular" },
    { logo: react_logo, name: "React" },
    { logo: hadoop_logo, name: "Hadoop" },
    { logo: spring_bbot_logo, name: "Spring Boot" },
    { logo: mysql_logo, name: "MySQL" },
    { logo: hibernate_logo, name: "Hibernate" },
    { logo: wordpress_logo, name: "Wordpress" },
    { logo: android_logo, name: "Android" },
    { logo: aws_logo, name: "AWS" },
    { logo: cloud_logo, name: "Cloud" },
    { logo: Ai_logo, name: "ML and AI" },
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
            <img src={TechIcon.logo} alt="logo" />
            {TechIcon.name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tech;
