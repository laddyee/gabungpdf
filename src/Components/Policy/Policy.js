import React from "react";

const icons = [
  {
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    path: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
  },
  {
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    path: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
];

const Policy = ({ title, desc, Points }) => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold !text-gray-900">{title}</h2>
          <p className="mx-auto max-w-2xl !text-gray-600">{desc}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {Points.map((point, index) => (
            <div key={index} className="text-center">
              <div
                className={`flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full ${icons[index]?.bgColor}`}
              >
                <svg
                  className={`w-8 h-8 ${icons[index]?.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={icons[index]?.path}
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold !text-gray-900">{point.title}</h3>
              <p className="text-sm !text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
