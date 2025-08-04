"use client";
import MiniFooter from "@/Components/MiniFooter/MiniFooter";
import HeroSection from "@/Components/Policy/HeroSection";
import Policy from "@/Components/Policy/Policy";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../../../lib/languageContext";


const TermOfServices = () => {
  const { dict, loading } = useLanguage();

  if (loading || !dict) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = window.innerHeight * 0.15; // 10% of viewport height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const data = dict.Terms.UpperSec.tableOfContents;
  const sections = dict.Terms.sections;
  const footer = dict.Terms.footer;
  return (
    <>
      <HeroSection props={"Terms"}></HeroSection>

      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="flex items-center mb-6 font-bold !text-gray-900">
                    <svg
                      className="mr-2 w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      ></path>
                    </svg>
                    {data.title}
                  </h3>

                  <div className="space-y-2">
                    {data.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToSection(item.target)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center ${
                          idx === 0
                            ? "bg-blue-100 !text-blue-800 font-medium"
                            : "!text-gray-600 hover:bg-gray-100 hover:!text-gray-900"
                        }`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="overflow-hidden bg-white rounded-2xl shadow-lg">
                <div className="p-8 space-y-12 lg:p-12">
                  {sections.map((section) => (
                    <div key={section.id} id={section.id}>
                      <h2 className="flex items-center mb-6 text-3xl font-bold !text-gray-900">
                        <span className="mr-3">{section.icon}</span>
                        {section.title}
                      </h2>
                      <div className="space-y-6 max-w-none !text-gray-700 prose prose-lg">
                        {section.content.map((item, idx) => {
                          switch (item.type) {
                            case "paragraph":
                              return (
                                <div
                                  key={idx}
                                  className="mb-6 text-lg leading-relaxed !text-gray-700"
                                >
                                  {item.text}
                                </div>
                              );

                            case "highlight":
                              // Determine color by section ID
                              let bgClass =
                                "bg-blue-50 border-blue-500 !text-blue-800";
                              let titleClass = "!text-blue-900";
                              if (section.id === "user-files") {
                                bgClass =
                                  "bg-green-50 border-l-4 border-green-500 !text-green-800";
                                titleClass = "!text-green-900";
                              } else if (
                                section.id === "limitation-liability"
                              ) {
                                bgClass =
                                  "bg-yellow-50 border-l-4 border-yellow-500 !text-yellow-800";
                                titleClass = "!text-yellow-900";
                              } else if (section.id === "indemnification") {
                                bgClass =
                                  "bg-red-50 border-l-4 border-red-500 !text-red-800";
                              } else if (section.id === "changes") {
                                bgClass = "bg-gray-50 !text-gray-700";
                              }

                              return (
                                <div
                                  key={idx}
                                  className={`p-6 rounded-xl ${bgClass}`}
                                >
                                  {item.title && (
                                    <p
                                      className={`mb-2 font-semibold ${titleClass}`}
                                    >
                                      {item.title}
                                    </p>
                                  )}
                                  <p className={bgClass.split(" ").pop()}>
                                    {item.text}
                                  </p>
                                </div>
                              );

                            case "subsection":
                              return (
                                <div key={idx}>
                                  <h3 className="mb-3 text-xl font-semibold !text-gray-900">
                                    {item.title}
                                  </h3>
                                  <p className="!text-gray-700">{item.text}</p>
                                  {item.list && (
                                    <ul className="ml-4 space-y-2 list-disc list-inside !text-gray-700 mt-2">
                                      {item.list.map((li, liIdx) => (
                                        <li key={liIdx}>{li}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              );

                            default:
                              return null;
                          }
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer section (No layout change) */}
              <div className="p-8 mt-12 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="mb-2 font-bold !text-gray-900">
                      {footer.heading}
                    </h3>
                    <p className="!text-gray-600">{footer.description}</p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    {footer.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className={`inline-flex items-center justify-center ${
                          link.href.startsWith("mailto:")
                            ? "px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg transition-all duration-200 transform hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
                            : "px-4 py-2 !text-gray-700 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
                        }`}
                      >
                        <span className="mr-2">{link.icon}</span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Policy
         Points={dict.Terms.sections2.points}
        title={dict.Terms.sections2.title}
        desc={dict.Terms.sections2.desc}
      ></Policy>
      <MiniFooter />
    </>
  );
};

export default TermOfServices;
