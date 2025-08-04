import Link from "next/link";
import React from "react";
import { useLanguage } from "../../../lib/languageContext";

const MiniFooter = () => {
  const { dict, loading } = useLanguage();
  if (!dict) {
    return (
      <footer className="text-white bg-gray-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="bg-gray-700 h-4 w-48 rounded mb-4"></div>
            <div className="bg-gray-700 h-3 w-64 rounded mb-2"></div>
            <div className="bg-gray-700 h-3 w-32 rounded"></div>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold !text-white">
            {dict.MiniFooter.heading}
          </h2>
          <p className="mb-8 text-xl !text-blue-100">
            {dict.MiniFooter.subheading}
          </p>
          <Link
            className="inline-flex items-center px-8 py-4 font-bold text-blue-600 bg-white rounded-xl shadow-xl transition-colors transform hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
            href="/combine-pdf"
          >
            <svg
              className="mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
           {dict.MiniFooter.button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default MiniFooter;
