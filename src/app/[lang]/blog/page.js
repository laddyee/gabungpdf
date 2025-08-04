import React from 'react'
import { getDictionary } from '../../../../lib/dictionaries';
import BlogPage from './Blog';

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.Seo.Blog?.title  || "Default Title",
    description: dict.Seo.Blog?.description || "Default description",
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