import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const ModalForm = ({ setModal }) => {
  const form = useRef();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: "",
  });

  const InputField = (name, type) => {
    const placeholder = `Enter Your ${name}`;
    return (
      <input
        required
        type={type}
        value={contact[`${name.toLowerCase()}`]}
        name={name.toLowerCase()}
        onChange={(e) =>
          setContact({ ...contact, [e.target.name]: e.target.value })
        }
        className="border outline-none w-full border-slate-300 rounded-[6px] mb-2 px-2 py-2"
        placeholder={placeholder}
      />
    );
  };

  // function to send email for job applications
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_CAREER_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_ID,
        }
      ),
    onSuccess: () => {
      toast.success("Application sent .");
      setContact({
        name: "",
        email: "",
        phone: "",
        role: "",
        resume: "",

      })
    },
    onError: () => toast.error("something went wrong"),
  });

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <Toaster />
    <div className="fixed inset-0 p-4 flex justify-center items-center bg-opacity-30 backdrop-blur-sm">
      <div className="p-8 relative bg-white bg-transparent shadow-[0px_0px_30px] shadow-green-400 text-black rounded-xl">
        {/* Close Button */}
        <span
          onClick={onClose}
          className="absolute right-4 top-2 font-extrabold text-2xl text-red-600 bg-slate-200 px-2 hover:cursor-pointer rounded-[5px]"
        >
          &#9747;
        </span>

        <form
          ref={form}
          className="flex flex-col gap-4 "
          onSubmit={(e) => {
            e.preventDefault();
            mutate();
          }}
        >
          <h2 className="text-center text-2xl text-blue-600 font-headingFont font-bold">
            Application Form
          </h2>

          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            {/* First Form Field*/}
            {InputField("Name", "text")}

            {/* Second Form Field */}
            {InputField("Email", "email")}
          </div>

          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            {/* Third Form Field */}
            {InputField("Phone", "text")}

            {/* Role Field */}
            {InputField("Role", "text")}
          </div>

          {/* <div className="flex gap-3 flex-wrap md:flex-nowrap">
            {InputField("resume", "file")}
          </div> */}

          <div type="submit" className="flex justify-center items-center">
            <button className="bg-blue-600  py-2 px-4 font-headingFont font-bold text-white rounded-xl hover:bg-blue-700 transition-all duration-300 ease-linear">
              {isPending ? "sending..." : "Apply"}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ModalForm;
