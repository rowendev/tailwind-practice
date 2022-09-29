import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-6 px-6  justify-between text-white grid md:grid-cols-3">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
          REACT.
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex
          dolorum impedit minus totam possimus optio molestias odit nobis!
          Maxime.
        </p>
      </div>

      <div className="md:col-span-2 px-8">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
          REACT.
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex
          dolorum impedit minus totam possimus optio molestias odit nobis!
          Maxime.
        </p>
      </div>
    </div>
  );
};

export default Footer;
