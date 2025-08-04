"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getDictionary, locales } from "./dictionaries"

const LanguageContext = createContext(null)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children , lang: initialLang }) => {
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() => {
    const initLang = async () => {
      const langToUse = initialLang || getLangFromStorage() || "en";
      await loadLanguage(langToUse);
      setLoading(false);
    };

    initLang();
  }, [initialLang]);

  const [currentLang, setCurrentLang] = useState("en")
  const [dict, setDict] = useState(null)
  const [loading, setLoading] = useState(true)

  const LANG_EXPIRY_KEY = "selectedLanguageExpiry"
  const LANG_KEY = "selectedLanguage"

  const saveLangToStorage = (lang) => {
    const now = new Date().getTime()
    const oneDay = 24 * 60 * 60 * 1000
    localStorage.setItem(LANG_KEY, lang)
    localStorage.setItem(LANG_EXPIRY_KEY, (now + oneDay).toString())
  }

  const getLangFromStorage = () => {
    const lang = localStorage.getItem(LANG_KEY)
    const expiry = parseInt(localStorage.getItem(LANG_EXPIRY_KEY), 10)

    if (!lang || !expiry || Date.now() > expiry) {
      localStorage.removeItem(LANG_KEY)
      localStorage.removeItem(LANG_EXPIRY_KEY)
      return null
    }

    return lang
  }

  const loadLanguage = async (lang) => {
    try {
      const dictionary = await getDictionary(lang)
      setDict(dictionary)
      setCurrentLang(lang)
      if (typeof window !== "undefined") {
        saveLangToStorage(lang)
      }
    } catch (error) {
      console.error("Error loading dictionary:", error)
    }
  }

  const detectLangFromPath = () => {
    const segments = pathname.split("/").filter(Boolean)
    if (segments.length > 0 && locales.includes(segments[0])) {
      return segments[0]
    }
    return null
  }

  useEffect(() => {
    const initLang = async () => {
      const pathLang = detectLangFromPath()
      const savedLang = typeof window !== "undefined" ? getLangFromStorage() : null
      const langToUse = pathLang || savedLang || "en"
      await loadLanguage(langToUse)
      setLoading(false)
    }

    initLang()
  }, [pathname])

  const changeLanguage = (newLang) => {
    const segments = pathname.split("/").filter(Boolean)
    const isLangPath = segments.length > 0 && locales.includes(segments[0])

    if (isLangPath) {
      segments[0] = newLang
    } else {
      segments.unshift(newLang)
    }

    const newPath = "/" + segments.join("/")
    router.push(newPath)
    loadLanguage(newLang)
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        dict,
        loading,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
