import React from 'react'
import CombinePdfPage from './CombinePdf'
import { getDictionary } from '../../../../lib/dictionaries';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  const dict = await getDictionary(lang);
  return {
    title: dict.Seo.CombinePdf?.title || "Default Title",
    description: dict.Seo.CombinePdf?.description || "Default description",
     alternates: {
      canonical: `https://www.gabungpdf.id/${lang}/combine-pdf`,
    },
  };
}


const layout = () => {
  return (
    <>
      <CombinePdfPage></CombinePdfPage>
    </>
  )
}

export default layout