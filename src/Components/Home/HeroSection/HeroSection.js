"use client"
import Link from "next/link"


const HeroSection = ({ dict }) => {

  return (
    <>
      <div className="py-16 bg-gradient-light backdrop-blur supports-[backdrop-filter]:bg-gradient-to-br supports-[backdrop-filter]:from-blue-50 supports-[backdrop-filter]:to-indigo-100 dark:bg-background">
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-semibold md:text-6xl darks">{dict.home.title}</h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-description ">{dict.home.description}</p>
          <button className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700 cursor-pointer">
            <Link href="/combine-pdf">
            {dict.home.mergeNow}
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default HeroSection
