import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16  text-white">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3">
        <div className="px-8 lg:col-span-2 md:px-0 my-8">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-sm md:text-xl">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 w-[300px] rounded-md my-6 ml-8 md:ml-0 mr-2 text-black md:w-[250px]"
          />
          <button className="bg-[#00df9a] w-[100px] rounded-md font-bold my-6 py-2  text-black">
            Notify me
          </button>
          <p className="px-8 md:px-0">
            We care about the protection of yout data. <br />
            Read our{" "}
            <span className="text-[#00df9a] underline cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
