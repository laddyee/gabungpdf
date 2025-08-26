"use client"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../lib/languageContext";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Instructions from "@/Components/Home/Instruction/Instructions";

export default function Home() {

  const { currentLang, dict, loading, changeLanguage } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    // Only force English if we're explicitly on the root path AND no language is saved
    if (pathname === "/") {
      const savedLang = typeof window !== "undefined" ? localStorage.getItem("selectedLanguage") : null

      // Only force English if no language preference is saved
      if (!savedLang) {
        localStorage.setItem("selectedLanguage", "en")
        if (currentLang !== "en") {
          changeLanguage("en")
        }
      }
      // If user has a saved language preference, respect it
      else if (savedLang !== currentLang) {
        changeLanguage(savedLang)
      }
    }
  }, [pathname, currentLang, changeLanguage])

  

  if (loading || !dict || Object.keys(dict).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }
  return (
    <>
    <section className="min-h-screen bg-background text-foreground">
      <HeroSection lang={currentLang} dict={dict} />
      <Instructions lang={currentLang} dict={dict} />
    </section>
    </>

  );
}
