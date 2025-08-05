import React from 'react'
import { getDictionary } from '../../../../lib/dictionaries';
import TermOfServices from './Terms';

export async function generateMetadata({ params }) {
   const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  const dict = await getDictionary(lang);
  return {
    title: dict.Seo.TermsAndCondition?.title  || "Default Title",
    description: dict.Seo.TermsAndCondition?.description || "Default description",
     alternates: {
      canonical: `https://www.gabungpdf.id/${lang}/terms-of-service`,
    },
  };
}


const layout = () => {
  return (
    <>
    <TermOfServices></TermOfServices>
    </>
  )
}

export default layout