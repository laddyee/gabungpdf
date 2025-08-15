import React from 'react'
import BlogPage from './Blog'

export const metadata = {
  title: "Combine PDFs Blog: PDF Merging Tips & Guides",
  description: "Explore Gabung PDF’s blog for expert tips on merging PDFs, tutorials, and tools to simplify your PDF tasks. Read now for insights!",
   alternates: {
      canonical: `https://www.gabungpdf.id/blog`,
    },
};

const layout = () => {
  return (
    <>
    <BlogPage></BlogPage>
    </>
  )
}

export default layout