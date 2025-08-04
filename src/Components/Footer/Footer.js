"use client"
import Link from "next/link"
import { useLanguage } from "../../../lib/languageContext"

const Footer = () => {
  const { dict } = useLanguage()

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
    )
  }

  return (
    <>
      <footer className="text-white bg-gray-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="flex justify-center items-center mr-3 w-8 h-8 bg-blue-600 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold !text-white">Gabung PDF</h3>
              </div>
              <p className="mb-2 max-w-md !text-gray-300">{dict.footer.description}</p>
              <p className="!text-[#d1d5db]">
                {dict.footer.contact} <Link href="mailto:admin@gabungpdf.id">admin@gabungpdf.id</Link>
              </p>
              <div className="flex space-x-4 mt-5">
                <Link href="#" className="text-gray-400 transition-colors hover:text-white" title="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link href="#" className="!text-gray-400 transition-colors hover:text-white" title="Facebook">
                  <svg viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5 icon icons8-Facebook-Filled">
                    <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 transition-colors hover:text-white" title="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">{dict.footer.quickLinks}</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="!text-gray-300 transition-colors hover:!text-white" href="/">
                    {dict.nav.home}
                  </Link>
                </li>
                <li>
                  <Link className="!text-gray-300 transition-colors hover:!text-white" href="/combine-pdf">
                    {dict.nav.combinePdf}
                  </Link>
                </li>
                <li>
                  <Link className="!text-gray-300 transition-colors hover:!text-white" href="/blog">
                    {dict.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link className="!text-gray-300 transition-colors hover:!text-white" href="/privacy-policy">
                    {dict.footer.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link className="!text-gray-300 transition-colors hover:!text-white" href="/terms-of-service">
                    {dict.footer.termsOfService}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center pt-8 mt-8 border-t !border-gray-800 md:flex-row">
            <p className="text-sm !text-gray-400">© 2025 Gabung PDF. {dict.footer.allRights}</p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link className="text-sm text-gray-400 transition-colors hover:!text-white" href="/privacy-policy">
                {dict.footer.privacyPolicy}
              </Link>
              <Link className="text-sm !text-gray-400 transition-colors hover:!text-white" href="/terms-of-service">
                {dict.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
