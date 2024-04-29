import React from "react";

// import woman image
import WomanImg from "../assets/img/banner-women2.png";
import resume from "../assets/Yash-Devrukhkar.pdf";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-teal-300 font-bold text-md mb-[22px]">
              Hey, I'm Yash! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] md:tracking-[-2px]">
              I Build <br /> Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              A new idea comes suddenly and in a rather intuitive way, but
              intuition is nothing but the outcome of earlier intellectual
              experience.
            </p>

            <a
              href={resume}
              className="btn btn-md bg-cyan-700 hover:bg-secondary-hover transition-all"
            >
              Resume
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img className="bg-black" src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
