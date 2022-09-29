import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white justify-between h-24 max-w-[1440px] p-4 mx-auto items-center flex">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
        REACT.
      </h1>

      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:underline">Home</li>
        <li className="p-4 hover:underline">Company</li>
        <li className="p-4 hover:underline">Resources</li>
        <li className="p-4 hover:underline">About</li>
        <li className="p-4 hover:underline">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "absolute left-0 top-24 w-full h-full bg-[#000300] md:hidden z-10"
            : "fixed left-[-100%]"
        }
      >
        <ul className=" uppercase cursor-pointer p-4">
          <li className="p-4 border-b border-gray-600 hover:bg-[#464646af] ">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#464646af] ">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#464646af] ">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#464646af] ">
            About
          </li>
          <li className="p-4 border-b border-gray-600 hover:bg-[#464646af] ">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
