import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const ContactForm = useRef();
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // contact form funnction
  const InputBox = (name) => {
    const placeholder = ("Enter Your " + name).toString().toUpperCase();
    return (
      <input
        type="text"
        id="name"
        name={name}
        required
        placeholder={placeholder}
        value={ContactDetails[`${name.toLowerCase()}`]}
        onChange={(e) =>
          setContactDetails({
            ...ContactDetails,
            [e.target.name]: e.target.value,
          })
        }
        className="mt-4  w-full p-2 bg-slate-600 bg-opacity-30 text-white rounded-md flex  border-violet-500 border-l-4 shadow-md"
      />
    );
  };
  // message are of the form
  const Textarea = (message) => {
    return (
      <textarea
        id="message"
        name={message}
        rows="4"
        value={ContactDetails[message]}
        placeholder="DESCRIPTION"
        onChange={(e) =>
          setContactDetails({
            ...ContactDetails,
            [e.target.name]: e.target.value,
          })
        }
        className=" mt-4 p-2 bg-slate-600 bg-opacity-30 text-white rounded-md border-violet-500 border-l-4 shadow-md"
      ></textarea>
    );
  };

  // function to send query by mail
  const { mutate: SendQuery, isPending } = useMutation({
    mutationKey: "SendQuery",
    mutationFn: () =>
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_CONTACTUS_TEMPLATE_ID,
        ContactForm.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_ID,
        }
      ),
    onSuccess: () => {
      toast.success("message sent .");
      setContactDetails({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    },
    onError: () => toast.error("something went wrong"),
  });

  return (
    <>
      <Toaster />
      <form
        ref={ContactForm}
        onSubmit={(e) => {
          e.preventDefault();
          SendQuery();
        }}
        className=" md:w-[60%] justify-center flex gap-2 flex-col w-full font-navlistFont flex-1 px-10 py-6"
      >
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
        <div className="flex flex-col">{Textarea("message")}</div>
        <button
          type="submit"
          className="md:w-[30%] w-[90%] bg-violet-500 transition-all duration-150 ease-linear hover:bg-white hover:text-violet-700 font-semibold shadow-[5px_5px_10px_3px] shadow-violet-900 text-white px-4 py-2 rounded-md mt-4"
        >
          {isPending ? "sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
