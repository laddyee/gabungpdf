"use client";
import MiniFooter from "@/Components/MiniFooter/MiniFooter";
import HeroSection from "@/Components/Policy/HeroSection";
import Policy from "@/Components/Policy/Policy";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../../lib/languageContext";
import { redirect } from "next/navigation";

const policy = [
  {
    title: "Auto-Delete",
    desc: "Files automatically deleted within 1 hour",
  },
  {
    title: "Encrypted Transfer",
    desc: "All uploads use secure HTTPS encryption",
  },
  {
    title: "No File Reading",
    desc: "We never access or read your file contents",
  },
  {
    title: "No Sharing",
    desc: "Your files are never shared with third parties",
  },
];

const contentTypes = {
  paragraph: (text, key) => (
    <p key={key} className="!text-gray-700 mb-6 text-lg leading-relaxed">
      {text}
    </p>
  ),
  highlight: (item, key) => (
    <div
      key={key}
      className={`p-6 rounded-xl ${item.title?.includes("Uploaded Files")
        ? "bg-green-50"
        : item.title?.includes("No Third-Party Sharing")
          ? "bg-red-50"
          : item.title?.includes("Our Key Principle")
            ? "bg-blue-50 rounded-r-lg border-l-4 border-blue-500"
            : item.title?.includes("International Data Transfers")
              ? "bg-yellow-50 rounded-r-lg border-l-4 border-yellow-500"
              : item.title?.includes("Children's Privacy")
                ? "bg-orange-50 rounded-r-lg border-l-4 border-orange-500"
                : item.title?.includes("Data Security")
                  ? "bg-blue-50 rounded-xl"
                  : item.title?.includes("Your Rights")
                    ? "bg-blue-50 rounded-xl"
                    : item.title?.includes("Changes to This Policy")
                      ? "bg-gray-50 rounded-xl"
                      : "bg-gray-50"
        }`}
    >
      {item.title && (
        <h3
          className={`mb-3 text-xl font-semibold ${item.title.includes("Uploaded Files")
            ? "!text-green-900"
            : item.title.includes("No Third-Party Sharing")
              ? "!text-red-900"
              : item.title.includes("Our Key Principle")
                ? "!text-blue-900"
                : "!text-gray-900"
            }`}
        >
          {item.title}
        </h3>
      )}
      <p
        className={`${item.title?.includes("Uploaded Files")
          ? "!text-green-800"
          : item.title?.includes("No Third-Party Sharing")
            ? "!text-red-800"
            : item.title?.includes("Our Key Principle")
              ? "!text-blue-800"
              : item.title?.includes("International Data Transfers")
                ? "!text-yellow-800"
                : item.title?.includes("Children's Privacy")
                  ? "!text-orange-800"
                  : item.title?.includes("Data Security")
                    ? "!text-blue-800"
                    : item.title?.includes("Your Rights")
                      ? "!text-blue-800"
                      : item.title?.includes("Changes to This Policy")
                        ? "!text-gray-700"
                        : "!text-gray-700"
          }`}
      >
        {item.text}
      </p>
    </div>
  ),
  subsection: (item, key) => (
    <div key={key}>
      <h3 className="mb-3 text-xl font-semibold !text-gray-900">
        {item.title}
      </h3>
      <p className="mb-4 !text-gray-700">{item.text}</p>
      {item.list && (
        <ul className="ml-4 space-y-2 list-disc list-inside !text-gray-700">
          {item.list.map((li, idx) => (
            <li key={idx}>{li}</li>
          ))}
        </ul>
      )}
    </div>
  ),
  list: (items, key) => (
    <ul
      key={key}
      className="ml-4 space-y-2 list-disc list-inside !text-gray-700"
    >
      {items.map((li, idx) => (
        <li key={idx}>{li}</li>
      ))}
    </ul>
  ),
};

const Privacy = () => {
  const { currentLang, dict, loading } = useLanguage();
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
  console.log(dict);

  const data = dict.privacy.UpperSec.tableOfContents;
  const sections = dict.privacy.sections;
  const footer = dict.privacy.footer;

  if (loading || !dict) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  } else {
    redirect(`/${currentLang}/privacy-policy`)
  }

  return (
    <>
      <HeroSection props={"Policy"}></HeroSection>

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
                    {data.items.map(({ icon, label, target }, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(target)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center
                ${index === 0
                            ? "bg-blue-100 !text-blue-800 font-medium"
                            : "text-gray-600 hover:bg-gray-100 hover:!text-gray-900"
                          }`}
                      >
                        <span className="mr-2">{icon}</span>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 mt-6 bg-blue-50 rounded-2xl shadow-lg">
                  <h4 className="mb-3 font-bold text-blue-900">
                    🔒 Privacy Summary
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>Files
                      deleted within 1 hour
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>We don't
                      store your documents
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>Minimal data
                      collection
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>End-to-end
                      encryption
                    </li>
                  </ul>
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
                      <div className="max-w-none prose prose-lg !text-gray-700 space-y-6">
                        {section.content.map((item, index) => {
                          switch (item.type) {
                            case "paragraph":
                              return contentTypes.paragraph(item.text, index);
                            case "highlight":
                              return contentTypes.highlight(item, index);
                            case "subsection":
                              return contentTypes.subsection(item, index);
                            case "list":
                              return contentTypes.list(item.items, index);
                            default:
                              return null;
                          }
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 mt-12 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="mb-2 font-bold !text-gray-900">
                      {footer.heading}
                    </h3>
                    <p className="!text-gray-600">{footer.description}</p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    {footer.links.map((link, i) =>
                      link.href.startsWith("mailto:") ? (
                        <Link
                          key={i}
                          href={link.href}
                          className="inline-flex justify-center items-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg transition-all duration-200 transform hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1"
                        >
                          <span className="mr-2">{link.icon}</span> {link.label}
                        </Link>
                      ) : (
                        <Link
                          key={i}
                          href={link.href}
                          className="inline-flex justify-center items-center px-4 py-2 !text-gray-700 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200"
                        >
                          <span className="mr-2">{link.icon}</span> {link.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Policy
        Points={dict.privacy.sections2.points}
        title={dict.privacy.sections2.title}
        desc={dict.privacy.sections2.desc}
      />
      <MiniFooter />
    </>
  );
};

export default Privacy;
