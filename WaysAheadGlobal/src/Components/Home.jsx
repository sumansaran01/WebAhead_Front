import React from "react";
import ParticlesComponent from "./ParticlesComponent";
import News from "./News";
import About from "./About";
import Services from "./Services";
import UseCases from "./UseCases";
import Careers from "./Carrers";
import Contact from "./Contact";

const Home = () => {


  return (
    <>
      <section id="home" className="min-h-[80vh] w-full flex flex-col md:flex-row-reverse items-center justify-center px-6 md:px-12 lg:px-20 py-10 md:gap-16 overflow-hidden">
        {/* <ParticlesComponent /> */}
        <div className="flex justify-center items-center">
          <img
            src="https://www.waysaheadglobal.com/assets/images/logo.png"
            alt="WaysAhead Global Logo"
            className="w-48 md:w-60 lg:w-72 transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="text-center md:text-left w-full md:w-1/2 space-y-5">
          <h2
            className="text-2xl md:text-3xl text-gray-800 leading-10 md:leading-14"
            style={{ fontFamily: "Times New Roman" }}
          >
            Data is eternal, and we are building consciousness around it. We are{" "}
            <span className="font-semibold">WAYSAHEAD GLOBAL.</span>
          </h2>

          <p className="text-sm md:text-base w-[90%] mx-auto md:mx-0">
            We help companies transform their business vision into data-centric
            innovations.
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <button className="px-6 py-3 border border-orange-700 text-orange-700 text-sm font-semibold rounded-md cursor-pointer transition-all duration-300 hover:bg-orange-700 hover:text-white">
              Explore AlaaS
            </button>
            <button className="px-6 py-3 bg-orange-600 text-white text-sm font-semibold rounded-md transition-all duration-300 hover:bg-orange-700 cursor-pointer">
              Rapid Product Development
            </button>
          </div>
        </div>
      </section>
      <News />
      <About/>
      <Services/>
      <UseCases/>
      <Careers/>
      <Contact/>
    </>
  );
};

export default Home;
