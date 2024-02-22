import React from "react";
import { InputBox } from "./InputBox";
import { Textarea } from "./Textarea";
import ContactForm from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden mt-8 px-10  flex flex-col justify-center items-center gap-4 bg-slate-900 dark:text-white">
      <div className="flex overflow-x-hidden mt-10 mb-10  md:flex-row flex-col flex-wrap justify-center  bg-slate-700 rounded-md ">
        {/* left section */}
        <div className="flex flex-1 flex-col gap-16 p-10 bg-gradient-to-r from-purple-500 to-pink-500">
          {/* first part */}
          <div className="mb-12">
            <h1 className="font-headingFont text-5xl font-extrabold text-white">
              Contact Information
            </h1>
          </div>
          {/* second part */}
          <div className=" flex flex-col gap-2 ">
            <p className="font-navlistFont text-md text-slate-300">
              6th floor office no. 503 Stellar Spaces , opposite Zensar it park
              Kharadi pune
            </p>
            <span className="text-xl font-semibold text-red-950 font-headingFont">
              8766613742
            </span>
            <span className="text-md font-semibold text-blue-900">
              hr@vionsys.com
            </span>
          </div>
          {/* third part */}
          <div className=" text-lg font-bold text-white mt-20">
            <p className="mb-2">Follow Us On</p>
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-700 text-3xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-700 text-3xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-yellow-500 text-3xl cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* right section */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
