import React from 'react'
import CombinePdfPage from './CombinePdf'
export const metadata = {
  title: "Online PDF Combiner | Merge PDFs Securely with GabungPDF.id",
  description:
    "Combine PDF files instantly with GabungPDF.id. Our online PDF merger is fast, secure, and works on all devices – no registration or installation need.",
   alternates: {
      canonical: `https://www.gabungpdf.id/combine-pdf`,
    },
};
const layout = () => {
  return (
    <>
    <CombinePdfPage></CombinePdfPage>
    </>
  )
}

export default layout
