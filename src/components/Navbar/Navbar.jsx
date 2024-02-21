import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black w-full md:fixed ">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src="logo" alt="logo" className="md:cursor-pointer" />
          <div
            className="text-3xl md:hidden transition-all duration-200"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            {!open ? <IoMenu color="white" /> : <IoClose color="white" />}
          </div>
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex flex-col pl-6 md:pl-0 bg-black text-white gap-4 absolute w-full transition-all 0.2s ease-in md:w-fit top-16 md:top-0 md:static justify-center md:flex-row md:items-center md:gap-4`}
        ><div className="flex flex-col md:flex-row md:gap-5">

          <Link to="/" className="">
            Home
          </Link>
          <Link to="/AboutUs" className="">
            About Us
          </Link>

          <NavLinks />
          <Link to="/Career" className="">
            Career
          </Link>
          <Link to="/ContactUs" className="">
            Contact
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

