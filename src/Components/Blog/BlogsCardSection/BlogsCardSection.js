"use client";

import React from "react";
import Blog1Image from "../../../../public/Blog1Image.webp";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../../lib/languageContext";

const BlogsCardSection = ({ dict }) => {
  const card = dict.blog.blogsPage.cards[0];
  const card1 = dict.blog.blogsPage.cards[1];
  const { currentLang, loading } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            className="overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 transform group hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={Blog1Image}
                alt={"Blog Post Image"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4 space-x-2 text-xs !text-gray-500">
                <time dateTime={card.date} className="font-medium">
                  {card.date}
                </time>
                <span className="w-1 h-1 !bg-gray-400 rounded-full" />
                <span>{card.author}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold leading-tight !text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-2">
                <Link href={currentLang ? `/${currentLang}/blog/gabungpdfid-the-ultimate-tool-to-combine-pdf-files` : `/blog/gabungpdfid-the-ultimate-tool-to-combine-pdf-files`} >{card.headline}</Link>
              </h3>
              <p className="mb-6 text-sm leading-relaxed !text-gray-600 line-clamp-3">
                {card.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <Link href={currentLang ? `/${currentLang}/blog/gabungpdfid-the-ultimate-tool-to-combine-pdf-files` : `/blog/gabungpdfid-the-ultimate-tool-to-combine-pdf-files`} className="inline-flex items-center text-sm font-semibold !text-blue-600 hover:!text-blue-700 group-hover:underline">
                {card1.buttonName}
                <svg
                  className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <div className="flex items-center text-xs text-gray-400">
                <svg
                  className="mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {card.readTime}
              </div>
            </div>
        </div>
      </article>
    </div>
      </div >
    </section >
  );
};

export default BlogsCardSection;
