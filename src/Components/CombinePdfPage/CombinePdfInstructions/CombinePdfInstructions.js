import React from "react";
import "../../Home/Instruction/Instructions.css";
import Link from "next/link";

const CombinePdfInstructions = ({ dict }) => {
  const combinePdf = dict.combinePdf; // Accessing the 'combinePdf' part of the dictionary

  return (
    <>
      <section className="px-4 pt-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="pb-10 -mt-10">
          <div className="instructions">
            {/* Section 1 */}
            <h2 className="!leading-[39px]">
              {combinePdf["S1H1"]}
            </h2>
            <p>{combinePdf["S1P1"]}</p>
            <p>{combinePdf["S1P2"]}</p>

            {/* Section 2 */}
            <h2>{combinePdf["S2H1"]}</h2>
            <p>{combinePdf["S2P1"]}</p>
            <p>{combinePdf["S2P2"]}</p>

            {/* Combine PDF Files */}
            <h2>{combinePdf["combine_pdf_files"]["intro"]}</h2>
            <p>{combinePdf["combine_pdf_files"]["para"]}</p>
            <ul>
              {combinePdf["combine_pdf_files"]["items"].map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item["title"]}</strong>: {item["desc"]}
                  </p>
                </li>
              ))}
            </ul>
            <p>{combinePdf["combine_pdf_files"]["para2"]}</p>

            {/* Step-by-Step Guide */}
            <h2>{combinePdf["stepbystep"]["intro"]}</h2>
            <p>{combinePdf["stepbystep"]["para"]}</p>
            <ul>
              {combinePdf["stepbystep"]["items"].map((item, index) => (
                <li key={index}>
                  <h3>{item["title"]}</h3>
                  <p>{item["desc"]}</p>
                </li>
              ))}
            </ul>
            <h3>{combinePdf["stepbystep"]["intro2"]}</h3>
            <p>{combinePdf["stepbystep"]["para2"]}</p>
            <h3>{combinePdf["stepbystep"]["intro3"]}</h3>
            <p>{combinePdf["stepbystep"]["para3"]}</p>

            {/* Benefits Section */}
            <h2>{combinePdf["benefits"]["intro"]}</h2>
            <p>{combinePdf["benefits"]["para"]}</p>
            <ul>
              {combinePdf["benefits"]["items"].map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item["title"]}</strong>: {item["desc"]}
                  </p>
                </li>
              ))}
            </ul>

            {/* When Should You Combine PDFs */}
            <h2>{combinePdf["should_you"]["intro"]}</h2>
            <p>{combinePdf["should_you"]["para"]}</p>
            <ul>
              {combinePdf["should_you"]["items"].map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item["title"]}</strong>: {item["desc"]}
                  </p>
                </li>
              ))}
            </ul>

            {/* Tips Section */}
            <h2>{combinePdf["Tips"]["intro"]}</h2>
            <p>{combinePdf["Tips"]["para"]}</p>
            <ul>
              {combinePdf["Tips"]["items"].map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>{item["title"]}</strong>: {item["desc"]}
                  </p>
                </li>
              ))}
            </ul>

            {/* Why Choose Section */}
            <h2>{combinePdf["why_choose"]}</h2>
            <p>{combinePdf["why_choose_para"]}</p>
            <p>{combinePdf["why_choose_para2"]}</p>

            {/* Conclusion Section */}
            <h2>{combinePdf["conclusion"]}</h2>
            <p>{combinePdf["conclusion_para"]}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinePdfInstructions;
