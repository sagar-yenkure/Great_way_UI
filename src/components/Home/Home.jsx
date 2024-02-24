import React, { useEffect, useState } from "react";
import dnatrim from "../../assets/videos/hand-trim.mp4";
import robottrim from "../../assets/videos/robot-Trim.mp4";
import vrtrim from "../../assets/videos/vr-Trim.mp4";
import worktrim from "../../assets/videos/work-Trim.mp4";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Special from "./Special";
import Tech from "./Tech";


const VideoComponent = ({ video, title, desc, link, isVisible }) => (
  <div className={`relative ${isVisible ? "" : "hidden"} h-screen md:h-full`}>
    <video className="w-full h-full object-cover" src={video} loop autoPlay muted />
    <div className="absolute items-center left-1 h-full top-0 flex w-full p-2 md:p-5">
      <div className="md:max-w-[40rem] w-full flex-col space-y-3">
        <h1 className="loop_video_title text-4xl md:text-6xl text-purple-600 max-w-[50rem] font-bold font-headingFont">{title}</h1>
        <p className="loop_video_desc max-w-[25rem] text-xs md:text-sm font-bold text-white font-navlistFont">{desc}</p>
        <button className="loop_video_btn items-start bg-purple-600 p-1 md:p-3 rounded-lg font-bold text-white hover:bg-white hover:text-purple-400 transition-all 0.2 ease-out hover:border">Explore with us</button>
      </div>
    </div>
  </div>
);


const Video_Array = [
  {
    video: dnatrim,
    title: "AI Revolutionizes Healthcare",
    desc: "Websites, apps that Transforming Diagnostics, Personalized Medicine, and Patient Care ",
    link: "/pharma",
  },
  {
    video: robottrim,
    title: "The Transformative Power of Machine Learning",
    desc: "Machine Learning (ML) is revolutionizing industries across the globe, and healthcare is no exception.",
    link: "/artificial-intelligence",
  },
  {
    video: vrtrim,
    title: "Harnessing the Potential of Virtual Reality",
    desc: "Creating immersive gaming and movie experiences.",
    link: "/big-data-analytics",
  },
  {
    video: worktrim,
    title: "Creates projects considering the future scope",
    desc: "AI algorithms analyze project data to provide insights, predictions, and recommendations",
    link: "/project-management",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Video_Array.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <section className="flex relative">
          {Video_Array.map((vid, idx) => (
            <VideoComponent
              key={vid.video}
              video={vid.video}
              title={vid.title}
              desc={vid.desc}
              link={vid.link}
              isVisible={idx === index}
            />
          ))}
        </section>
      </main>
      <Special/>
      <Services />
      <Tech/>
      <Testimonials/>
    </>
  );
};

export default Home;
