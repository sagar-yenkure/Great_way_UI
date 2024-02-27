import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-[100%] overflow-x-hidden">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-12  ml-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            Greateway Software INDIA Pvt. Ltd. is a comprehensive IT company
            offering end-to-end technology solutions. With expertise in software
            development, network infrastructure, cybersecurity, cloud services,
            and IT consulting, we empower businesses to thrive in the digital
            era.
          </p>
          <div className="">
            <FontAwesomeIcon
              icon={faFacebook}
              className="mr-4 size-10 bg-blue-500 rounded-full"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="mr-4 size-10 bg-rose-500 rounded"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mr-4 size-10 bg-blue-500 rounded"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul>
            <li className="mb-2">Software Development</li>
            <li className="mb-2">Web Development</li>
            <li className="mb-2">Cloud Computing</li>
            <li className="mb-2">Artificial Intelligence</li>
            <li className="mb-2">DevOps</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Services</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span>Phone - 8766613742</span>
          </div>
          <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>Email: hr@greateway.com</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>
              6th floor office no. 503 Stellar Spaces, opposite Zensar IT park
              Kharadi Pune
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-2 text-center">
        <p>
          &copy; {new Date().getFullYear()} Greateway Software IT solutions
          INDIA Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
