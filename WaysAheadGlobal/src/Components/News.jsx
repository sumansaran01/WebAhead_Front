import React from "react";

const News = () => {
  return (
    <section id="news" className="flex flex-col md:flex-row-reverse gap-8 md:gap-4 items-center justify-between w-full md:w-[90%] mx-auto py-8 px-6">
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
        <iframe
          className="w-full max-w-[500px] h-64 md:h-80 rounded-lg shadow-xl"
          src="https://www.youtube.com/embed/fAVcj01Kp2U?autoplay=0&rel=0"
          title="WaysAhead Global"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full md:pl-9 md:w-1/2 flex flex-col gap-4">
        <h2
          className="text-3xl md:text-5xl font-bold  text-center md:text-left"
          style={{ fontFamily: "Times New Roman" }}
        >
          Who We Are
        </h2>

        <p className="w-[80%] mx-auto md:mx-0 text-center md:text-left  text-sm md:text-lg leading-relaxed">
          WaysAhead Global is a Singapore-based digital transformation company
          leveraging the power of data analytics and artificial intelligence,
          helping startups and tech companies across the planet maximize
          investments from data assets.
        </p>

        <button className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-4 rounded text-white cursor-pointer w-[80%] max-w-[200px] mx-auto md:mx-0 text-sm mt-4 shadow-lg">
          Latest News
        </button>
      </div>

    </section>
  );
};

export default News;
