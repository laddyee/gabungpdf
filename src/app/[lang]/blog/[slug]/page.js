import React from 'react';
import BlogDetail from './BlogDetail';
import { getDictionary } from '../../../../../lib/dictionaries';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || "en";

    const dict = await getDictionary(lang);
    const blog = dict.blog.blogsPage.cards.find(
        (card) => card.slug === params.slug
    );

    const isBlog1 = blog?.slug === "gabungpdfid-the-easiest-way-to-combine-pdf-files";

    return {
        title: isBlog1
            ? dict.Seo.Blog1?.title || "Default Title"
            : dict.Seo.Blog2?.title || "Default Title",
        description: isBlog1
            ? dict.Seo.Blog1?.description || "Default description"
            : dict.Seo.Blog2?.description || "Default description",
    };
}

const layout = () => {
    return (
        <>
            <BlogDetail />
        </>
    );
};

export default layout;
