"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import "./Singleblog.css";
import MiniFooter from "@/Components/MiniFooter/MiniFooter";
import { useLanguage } from "../../../../../lib/languageContext";

const BlogDetail = () => {
  const { slug } = useParams();
  const { currentLang, dict, loading } = useLanguage();
  if (loading || !dict) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  console.log("hello");
  

  const blog = dict.blog.blogsPage.cards.find((card) => card.slug === slug);
  console.log(blog);

  const Blog1 = dict.blog.blogsPage.cards[0].detail;
  console.log(Blog1);
   const Blog2 = dict.blog.blogsPage.cards[1];
  console.log(Blog1);

  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center text-[20px] font-semibold">
        blog not found
      </div>
    );
  }

  return (
    <>
      <div>
        <section className="py-16 text-white bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <div className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-blue-100">
                <li>
                  <Link className="transition-colors hover:text-white" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-white"
                    href="/blog"
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li className="font-medium text-white truncate">
                  {blog.headline}
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-blue-100">
                <span className="px-3 py-1 text-sm font-semibold rounded-full backdrop-blur-sm bg-white/20">
                  Tutorial
                </span>
                <time dateTime="July 13, 2025" className="font-medium">
                  {blog.date}
                </time>
                <span className="w-1 h-1 bg-blue-200 rounded-full"></span>
                <span>by {blog.author}</span>
                <span className="w-1 h-1 bg-blue-200 rounded-full"></span>
                <span className="flex items-center">
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
                    ></path>
                  </svg>
                  4 min read
                </span>
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl !text-white">
                {blog.headline}
              </h1>
              <div className="flex items-center pt-4 space-x-4">
                <span className="text-sm font-medium text-blue-200">
                  Share:
                </span>
                <div className="flex space-x-2">
                  <button
                    className="p-2 rounded-lg backdrop-blur-sm transition-colors bg-white/20 hover:bg-white/30"
                    title="Share on Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-lg backdrop-blur-sm transition-colors bg-white/20 hover:bg-white/30"
                    title="Share on Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-lg backdrop-blur-sm transition-colors bg-white/20 hover:bg-white/30"
                    title="Share on LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-lg backdrop-blur-sm transition-colors bg-white/20 hover:bg-white/30"
                    title="Copy Link"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <section className="lg:col-span-3">
              <article className="overflow-hidden  rounded-2xl shadow-lg">
                <img
                  src={blog.BlogImage}
                  alt="GabungPDF.id: The Easiest Way to Combine PDF Files"
                  className="w-full h-[100%] object-cover rounded-2xl mb-8"
                />
                {slug ===
                  "gabungpdfid-the-ultimate-tool-to-combine-pdf-files" && (
                  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="instructions">
                      <div id="article-content">
                        {/* Intro */}
                        <p>{Blog1.intro}</p>

                        {/* Features */}
                        <ul>
                          {Blog1.features.map((feature, index) => (
                            <li key={index}>
                              <strong>{feature.title}:</strong>
                              <p>{feature.description}</p>
                            </li>
                          ))}
                        </ul>

                        {/* Intro 2 */}
                        <p>{Blog1.intro2}</p>

                        {/* How to Use */}
                        <h2>{Blog1.how_to_use.title}</h2>
                        <p>{Blog1.how_to_use.paragraph}</p>
                        <ul>
                          {Blog1.how_to_use.steps.map((step, index) => (
                            <li key={index}>
                              <strong>{step.title}:</strong>
                              <p>{step.description}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{Blog1.how_to_use.note}</p>

                        {/* Benefits */}
                        <h2>{Blog1.benefits.title}</h2>
                        <p>{Blog1.benefits.Paragrph}</p>
                        <ol>
                          {Blog1.benefits.items.map((item, index) => (
                            <li key={index}>
                              <strong>{item.title}</strong>
                              <p>{item.description}</p>
                            </li>
                          ))}
                        </ol>

                        {/* Optimization Tips */}
                        <h2>{Blog1.optimization_tips.title}</h2>
                        <p>{Blog1.optimization_tips.paragraph}</p>
                        <ul>
                          {Blog1.optimization_tips.tips.map((tip, index) => (
                            <li key={index}>
                              <strong>{tip.title}:</strong>
                              <p>{tip.description}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{Blog1.optimization_tips.paragraph2}</p>

                        {/* Audience */}
                        <h3>{Blog1.audience.title}</h3>
                        <p>{Blog1.audience.paragraph}</p>
                        <ul>
                          {Blog1.audience.users.map((user, index) => (
                            <li key={index}>
                              <strong>{user.type}:</strong>
                              <p>{user.description}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{Blog1.audience.paragraph2}</p>

                        {/* Why Choose Us */}
                        <h3>{Blog1.why_choose_us.title}</h3>
                        <p>{Blog1.why_choose_us.parapraph}</p>
                        <ul>
                          {Blog1.why_choose_us.reasons.map((reason, index) => (
                            <li key={index}>
                              <strong>{reason.title}:</strong>
                              <p>{reason.description}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{Blog1.why_choose_us.paragraph2}</p>

                        {/* Conclusion */}
                        <h3>{Blog1.conclusion.title}</h3>
                        <p>
                          {Blog1.conclusion.paragraph}
                          <a href={Blog1.conclusion.cta.link}>
                            {Blog1.conclusion.cta.text}
                          </a>
                          {Blog1.conclusion.Remaingparagraph}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {slug ===
                  "gabungpdfid-the-easiest-way-to-combine-pdf-files" && (
                  <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="instructions">
                      <div id="article-content">
                        {/* Intro */}
                        <p>{Blog2.detail.intro}</p>

                        {/* Why Merge PDF Files */}
                        <h2>{Blog2.detail.why_merge_pdf.title}</h2>
                        <p>{Blog2.detail.why_merge_pdf.paragraph}</p>
                        <ul>
                          {Blog2.detail.why_merge_pdf.reasons.map(
                            ({ title, description }, i) => (
                              <li key={i} aria-level="1">
                                <strong>{title}</strong>
                                <p>{description}</p>
                              </li>
                            )
                          )}
                        </ul>
                        <p>{Blog2.detail.why_merge_pdf.note}</p>

                        {/* Features */}
                        <h2>{Blog2.detail.features.title}</h2>
                        <p>{Blog2.detail.features.paragraph}</p>
                        <ul>
                          {Blog2.detail.features.items.map(
                            ({ title, description }, i) => (
                              <li key={i} aria-level="1">
                                <strong>{title}</strong>
                                <p>{description}</p>
                              </li>
                            )
                          )}
                        </ul>
                        <p>{Blog2.detail.features.next}</p>

                        {/* How to Use */}
                        <h2>{Blog2.detail.how_to_use.title}</h2>
                        <p>{Blog2.detail.how_to_use.paragraph}</p>
                        <ul>
                          {Blog2.detail.how_to_use.steps.map(
                            ({ title, description }, i) => (
                              <li key={i} aria-level="1">
                                <strong>{title}</strong>
                                <p>
                                  {title === "Upload Your PDFs" ? (
                                    <>
                                      Go to{" "}
                                      <a href="https://gabungpdf.id/">
                                        https://gabungpdf.id/
                                      </a>{" "}
                                      and select the PDF files you want to
                                      merge. You can upload multiple files at
                                      once from your device.
                                    </>
                                  ) : (
                                    description
                                  )}
                                </p>
                              </li>
                            )
                          )}
                        </ul>
                        <p>
                          It s that easy! Whether you re combining two files or
                          dozens, GabungPDF.id ensures a smooth, hassle-free
                          experience.
                        </p>

                        {/* Top Benefits */}
                        <h3>Top Benefits of Using GabungPDF.id</h3>
                        <p>{Blog2.detail.top_benefits.paragraph}</p>
                        <ol>
                          {Blog2.detail.top_benefits.items.map(
                            ({ title, description }, i) => (
                              <li key={i}>
                                <strong>{title}</strong>
                                <p>{description}</p>
                              </li>
                            )
                          )}
                        </ol>

                        {/* Audience */}
                        <h3>Who Should Use GabungPDF.id?</h3>
                        <p>{Blog2.detail.audience.paragraph}</p>
                        <ul>
                          {Blog2.detail.audience.users.map(
                            ({ type, description }, i) => (
                              <li key={i} aria-level="1">
                                <strong>{type}</strong>
                                <p>{description}</p>
                              </li>
                            )
                          )}
                        </ul>
                        <p>{Blog2.detail.audience.note}</p>

                        {/* Pro Tips */}
                        <h3>Pro Tips for Merging PDFs Like a Pro</h3>
                        <p>{Blog2.detail.pro_tips.paragraph}</p>
                        <ul>
                          {Blog2.detail.pro_tips.tips.map(
                            ({ title, description }, i) => (
                              <li key={i} aria-level="1">
                                <strong>{title}</strong>
                                <p>{description}</p>
                              </li>
                            )
                          )}
                        </ul>

                        {/* Why GabungPDF.id stands out */}
                        <h2>{Blog2.detail.why_stand_out.title}</h2>
                        <p>
                          {Blog2.detail.why_stand_out.paragraph
                            .split("https://gabungpdf.id/")
                            .map((part, i, arr) =>
                              i < arr.length - 1 ? (
                                <span key={i}>
                                  {part}
                                  <a href="https://gabungpdf.id/">
                                    https://gabungpdf.id/
                                  </a>
                                </span>
                              ) : (
                                <span key={i}>{part}</span>
                              )
                            )}
                        </p>

                        {/* Conclusion */}
                        <h3 className="leading-[40px]">
                          {Blog2.detail.conclusion.title}
                        </h3>
                        <p>
                          {Blog2.detail.conclusion.paragraph
                            .split("gabungpdf.id/combine-pdf")
                            .map((part, i, arr) =>
                              i < arr.length - 1 ? (
                                <span key={i}>
                                  {part}
                                  <a href="https://gabungpdf.id/combine-pdf">
                                    gabungpdf.id/combine-pdf&nbsp;
                                  </a>
                                </span>
                              ) : (
                                <span key={i}>{part}</span>
                              )
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </section>
          </div>
        </section>

        <MiniFooter/>
      </div>
    </>
  );
};

export default BlogDetail;
