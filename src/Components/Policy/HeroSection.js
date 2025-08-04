import React from "react";
import { useLanguage } from "../../../lib/languageContext";

const Icon = {
  Policy: {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  Terms: {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }
};

const HeroSection = ({ props }) => {
  const { dict } = useLanguage();

  const section = dict.Content[props] || dict.Content.Policy;

  if (!dict) {
    return (
      <section className="py-16 text-white bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center animate-pulse">
            <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
            <div className="mx-auto mb-6 h-8 w-64 bg-gray-300 rounded"></div>
            <div className="mx-auto mb-2 h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="mx-auto mb-2 h-4 w-2/3 bg-gray-300 rounded"></div>
            <div className="mx-auto mb-8 h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="mx-auto max-w-md p-4 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="h-4 w-40 mx-auto bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 text-white bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mx-auto mb-6 w-20 h-20 rounded-2xl backdrop-blur-sm bg-white/20">
            <svg
              className="w-12 h-12 !text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={Icon[props]?.icon}
              ></path>
            </svg>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl !text-white">
            {section.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed !text-blue-100">
            {section.desc}
          </p>
          <div className="p-4 mx-auto max-w-md rounded-xl backdrop-blur-sm !bg-white/10">
            <p className="text-sm !text-blue-100">
              <strong className="!text-blue-100">{section.Updated}</strong>{" "}
              {section.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
