import React from "react";
import { InputBox } from "./InputBox";
import { Textarea } from "./Textarea";

const ContactForm = () => {
  return (
    <form className=" font-navlistFont flex-1 p-6">
      <h1 className="text-5xl font-headingFont font-extrabold text-white flex justify-center mb-20">
        Get in touch
      </h1>
      <div className="flex flex-row mb-4 space-x-4">
        {/* Your Full name input box */}
        {InputBox("name")}
        {/* Your Email name input box */}
        {InputBox("email")}
      </div>
      <div className="flex flex-row mb-4 space-x-4">
        {/* phone number field */}
        {InputBox("phone")}
      </div>
      <div className="flex flex-col mb-4">{Textarea("about")}</div>
      <button
        type="submit"
        className="bg-violet-500 transition-all duration-150 ease-linear hover:bg-white hover:text-violet-700 font-semibold shadow-[5px_5px_10px_3px] shadow-violet-900 text-white px-4 py-2 rounded-md mt-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
