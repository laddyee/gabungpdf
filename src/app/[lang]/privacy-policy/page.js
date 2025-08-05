import React from 'react'
import { getDictionary } from '../../../../lib/dictionaries';
import Privacy from './PrivacyPolicy';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  const dict = await getDictionary(lang);
  return {
    title: dict.Seo.privacyPolicy?.title  || "Default Title",
    description: dict.Seo.privacyPolicy?.description || "Default description",
     alternates: {
      canonical: `https://www.gabungpdf.id/${lang}/privacy-policy`,
    },
  };
}


const layout = () => {
  return (
    <>
    <Privacy></Privacy>
    </>
  )
}

export default layout