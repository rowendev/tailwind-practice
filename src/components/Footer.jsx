import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaGithub,
  FaMailchimp,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const [date, setDate] = useState(year);
  return (
    <div className="max-w-[1240px] mx-auto py-6 px-6  justify-between text-white grid md:grid-cols-3">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
          REACT.
        </h1>
        <p className="mt-4 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex
          dolorum impedit minus totam possimus optio molestias odit nobis!
          Maxime.
        </p>
      </div>

      <div className="md:col-span-2 md:px-8">
        <ul className="py-8 px-8 flex flex-row justify-between">
          <li className="cursor-pointer">
            <FaFacebookSquare size={30} />
          </li>
          <li className="cursor-pointer">
            <FaGithub size={30} />
          </li>
          <li className="cursor-pointer">
            <FaLinkedin size={30} />
          </li>
          <li className="cursor-pointer">
            <FaMailchimp size={30} />
          </li>
          <li className="cursor-pointer">
            <FaCode size={30} />
          </li>
        </ul>
      </div>
      <p className="text-center mx-auto font-bold">All right reserved {date}</p>
    </div>
  );
};

export default Footer;
