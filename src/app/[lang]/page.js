"use client"
import { useEffect } from "react"
import HeroSection from "@/Components/Home/HeroSection/HeroSection"
import Instructions from "@/Components/Home/Instruction/Instructions"
import { useLanguage } from "../../../lib/languageContext.js"




const LangPage = ({ params }) => {
  const { currentLang, dict, loading, changeLanguage } = useLanguage()

  useEffect(() => {
    const loadParams = async () => {
      const { lang } = await params
      if (lang && lang !== currentLang) {
        changeLanguage(lang)
      }
    }
    loadParams()
  }, [params, currentLang, changeLanguage])

  if (loading || !dict) {
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
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <HeroSection lang={currentLang} dict={dict} />
        <Instructions lang={currentLang} dict={dict} />
      </section>
    </>
  )
}

export default LangPage
