"use client"
import CombinePdfForm from "@/Components/CombinePdfPage/CombinePdfForm/CombinePdfForm"
import CombinePdfInstructions from "@/Components/CombinePdfPage/CombinePdfInstructions/CombinePdfInstructions"
import { useLanguage } from "../../../../lib/languageContext"


const CombinePdfPage = () => {
  const { currentLang, dict, loading } = useLanguage()

  if (loading || !currentLang) {
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
      <section className="min-h-screen bg-gray-50 transition-colors dark:bg-gray-900">
        <CombinePdfForm lang={currentLang} dict={dict} />
        <CombinePdfInstructions lang={currentLang} dict={dict} />
      </section>
    </>
  )
}

export default CombinePdfPage
