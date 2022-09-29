import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white h-screen">
      <div className="max-w-[800px] mt-24 w-full mx-auto text-center flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 md:text-2xl sm:text-4xl text-l">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-3">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-3xl sm:text-4xl text-xl font-bold mb-4">
            Fast, flexible finacing for{" "}
            <TypeAnimation
              sequence={[1000, "BTB", 2000, "BTC", 2000, "SASS", 1000]}
              speed={1}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                color: "#ff5900",
                fontWeight: "bold",
              }}
            />
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
