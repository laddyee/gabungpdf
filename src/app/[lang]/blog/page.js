import React from 'react'
import { getDictionary } from '../../../../lib/dictionaries';
import BlogPage from './Blog';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const lang = resolvedParams.lang || "en";
  return {
    title: dict.Seo.Blog?.title  || "Default Title",
    description: dict.Seo.Blog?.description || "Default description",
     alternates: {
      canonical: `https://www.gabungpdf.id/${lang}/blog`,
    },
  };
}


const layout = () => {
  return (
    <>
    <BlogPage></BlogPage>
    </>
  )
}

export default layout