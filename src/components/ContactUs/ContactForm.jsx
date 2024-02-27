import { InputBox } from "./InputBox";
import { Textarea } from "./Textarea";

const ContactForm = () => {
  return (
    <form className=" md:w-[60%] justify-center flex gap-2 flex-col w-full font-navlistFont flex-1 px-10 py-6">
      <h1 className="text-5xl font-headingFont  font-extrabold text-violet-600 flex justify-center mb-0 mt-4">
        Get in touch with us
      </h1>
      <div className="flex w-full md:gap-8 flex-col md:flex-row">
        {/* Your Full name input box */}
        {InputBox("name")}
        {/* Your Email name input box */}
        {InputBox("email")}
      </div>
      <div className="flex md:gap-8 w-full flex-col md:flex-row ">
        {/* phone number field */}
        {InputBox("phone")}
        {InputBox("subject")}
      </div>
      <div className="flex flex-col">{Textarea("about")}</div>
      <button
        type="submit"
        className="md:w-[30%] w-[90%] bg-violet-500 transition-all duration-150 ease-linear hover:bg-white hover:text-violet-700 font-semibold shadow-[5px_5px_10px_3px] shadow-violet-900 text-white px-4 py-2 rounded-md mt-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
