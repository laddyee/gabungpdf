"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider/theme-provider";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../../lib/languageContext";
// import { useLanguage } from "../../../lib/languageContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { currentLang, dict, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLang) => {
    if (newLang === currentLang) return;
    changeLanguage(newLang);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        if (pathname === "/" || pathname.match(/^\/[a-z]{2}(-[A-Z]{2})?$/)) {
          if (newLang === "en") {
            if (window.location.pathname !== "/") {
              window.location.href = "/";
            }
          } else {
            window.location.href = `/${newLang}`;
          }
        }
      }, 100);
    }
  };

  const languages = [
    { code: "ar", name: "Arabic" },
    { code: "az", name: "Azerbaijani" },
    { code: "be", name: "Belarusian" },
    { code: "bn", name: "Bengali" },
    { code: "bg", name: "Bulgarian" },
    { code: "ca", name: "Catalan" },
    { code: "zhCN", name: "Chinese (Simplified)" },
    { code: "zhTW", name: "Chinese (Traditional)" },
    { code: "hr", name: "Croatian" },
    { code: "cs", name: "Czech" },
    { code: "nl", name: "Dutch" },
    { code: "en", name: "English" },
    { code: "tl", name: "Filipino" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "hi", name: "Hindi" },
    { code: "hu", name: "Hungarian" },
    { code: "id", name: "Indonesian" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ms", name: "Malay" },
    { code: "my", name: "Myanmar (Burmese)" },
    { code: "ne", name: "Nepali" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese (Brazil)" },
    { code: "pa", name: "Punjabi (Gurmukhi)" },
    { code: "ro", name: "Romanian" },
    { code: "ru", name: "Russian" },
    { code: "si", name: "Sinhala" },
    { code: "so", name: "Somali" },
    { code: "es", name: "Spanish" },
    { code: "sv", name: "Swedish" },
    { code: "th", name: "Thai" },
    { code: "tr", name: "Turkish" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "uz", name: "Uzbek" },
    { code: "vi", name: "Vietnamese" },
  ];

  if (!dict) {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm dark:bg-gray-900 dark:border-gray-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-48 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`sticky top-0 z-50 `}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link className="flex items-center" href="/">
                <div className="flex justify-center items-center mr-3 w-8 h-8 bg-blue-600 rounded-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <strong className="text-md font-semibold">Gabung PDF</strong>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              <Link
                className="px-3 py-2 text-sm font-medium"
                href="/"
              >
              <p >{dict.nav.home || "home"}</p>
              </Link>
              <Link
                className="px-3 py-2 text-sm font-medium "
                href="/combine-pdf"
              >
                <p>{dict.nav.combinePdf}</p>
              </Link>
              <Link
                className="px-3 py-2 text-sm font-medium "
                href="/blog"
              >
                <p>{dict.nav.blog}</p>
              </Link>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-2">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={currentLang}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="px-2 py-2.5 rounded-[3px] font-[500] text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[150px] "
                  aria-label={dict.nav.selectLanguage}
                >
                  {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 text-white  hover:!bg-[#f3f4f6] hover:!text-[#4b5563] cursor-pointer h-10 w-10"
                >
                  {theme === "light" ? (
                   <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/crescent-moon.png" alt="crescent-moon"/>
                  ) : (
                    <Sun strokeWidth={3} className="h-4.5 w-4.5 " />
                    
                  )}
                  <span className="sr-only">Toggle theme</span>
                </button>
              </div>

              {/* Mobile controls */}
              <div className="flex items-center md:hidden">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                  >
                    {theme === "light" ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                  </button>
                </div>
                {/* Mobile menu button */}
                <button
                  className="p-2 text-gray-600 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  title="Menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
