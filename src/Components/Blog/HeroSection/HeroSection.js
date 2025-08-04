const HeroSection = ({ lang, dict }) => {
  return (
    <>
      <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl !text-white">{dict.blog.title}</h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed !text-blue-100 md:text-2xl">
            {dict.blog.description}
          </p>
          <div className="relative mx-auto mb-8 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder={dict.blog.searchPlaceholder}
                className="px-6 py-4 pl-14 w-full text-lg text-gray-900 rounded-2xl border-0 shadow-xl backdrop-blur-sm bg-white/95 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <svg
                className="absolute top-5 left-5 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex justify-center space-x-8 text-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold">2+</div>
              <div className="text-sm">{dict.blog.articles}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm">{dict.blog.readers}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">{dict.blog.available}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
