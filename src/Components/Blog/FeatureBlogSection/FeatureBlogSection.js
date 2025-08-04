"use client";

import React from "react";
import FeatureBlogImage from "../../../../public/FeatureBlogImage.webp";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../../lib/languageContext";

const FeatureBlogSection = ({ dict }) => {
 const {currentLang , loading } = useLanguage();

  const fb = dict.blog.featureblog;

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
            {fb.subtitle}
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            {fb.title}
          </h2>
        </div>
        <div className="overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
          <div className="grid gap-8 items-center p-8 lg:grid-cols-2 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm !text-gray-600">
                <time dateTime={fb.featuredArticle.date} className="font-medium">
                  {fb.featuredArticle.date}
                </time>
                <span className="w-1 h-1 !bg-gray-400 rounded-full" />
                <span>{`By ${fb.featuredArticle.author}`}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="px-3 py-1 text-xs font-semibold !text-purple-800 bg-purple-100 rounded-full">
                  {fb.featuredArticle.category}
                </span>
              </div>
              <h3 className="text-3xl font-bold leading-tight !text-gray-900 lg:text-4xl">
                {fb.featuredArticle.headline}
              </h3>
              <p className="text-lg leading-relaxed !text-gray-600">
                {fb.featuredArticle.excerpt}
              </p>
              <div className="flex items-center space-x-4">
                <Link href={currentLang ? `/${currentLang}/blog/gabungpdfid-the-easiest-way-to-combine-pdf-files` :  `/blog/gabungpdfid-the-easiest-way-to-combine-pdf-files`} className="inline-flex items-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg transition-all duration-200 transform hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-1">
                  {fb.featuredArticle.buttonName}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <span className="flex items-center text-sm text-gray-500">
                  <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {fb.featuredArticle.readTime}
                </span>
              </div>
            </div>
            <div className="relative lg:order-last h-64 md:h-auto">
              <Image
                src={FeatureBlogImage}
                alt={"feature Blog Post Image"}
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlogSection;
