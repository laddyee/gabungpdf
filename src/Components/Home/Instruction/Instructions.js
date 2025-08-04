import React from "react";
import "./Instructions.css";
import Link from "next/link";
import { useTheme } from "@/Components/ThemeProvider/theme-provider";

const Instructions = ({ dict }) => {
  const html = (str) => <p dangerouslySetInnerHTML={{ __html: str }} />;

   const { theme, setTheme } = useTheme()

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="instructions">
        {html(dict.home.sec1Para)}

        <h2>{dict.home.SecH1}</h2>
        {html(dict.home.SecH1P1)}
        
        <ul>
          {[1, 2, 3, 4].map(n => (
            <li key={n}>{html(dict.home[`SecH1UlLi${n}`])}</li>
          ))}
        </ul>

        <p>
          With a tool like{" "}
          <Link target="_blank" rel="noopener noreferrer nofollow" href="/combine-pdf">
            gabungPDF.id
          </Link>
          , you can <strong>gabung PDF</strong> (merge PDF in Indonesian) quickly…
        </p>

        <h2>{dict.home.steps.title}</h2>
        {html(dict.home.steps.intro)}
        {dict.home.steps.items.map((step, i) => (
          <div key={i}>
            <h3>{step.title}</h3>
            {html(step.desc)}
          </div>
        ))}

        <h2>{dict.home.whyChoose.title}</h2>
        <ul>
          {dict.home.whyChoose.points.map((p, i) => (
            <li key={i}>
              {html(p.title)} {html(p.desc)}
            </li>
          ))}
        </ul>

        <h2>{dict.home.benefits.title}</h2>
        <ul>
          {dict.home.benefits.items.map((b, i) => (
            <li key={i}>
              {html(b.title)} {html(b.desc)}
            </li>
          ))}
        </ul>

        <h2>{dict.home.seoTips.title}</h2>
        {html(dict.home.seoTips.intro)}
        {dict.home.seoTips.items.map((t, i) => (
          <div key={i}>
            <h3>{t.title}</h3>
            {html(t.desc)}
          </div>
        ))}

        <h2>{dict.home.useCases.title}</h2>
        <ul>
          {dict.home.useCases.items.map((u, i) => (
            <li key={i}>
              {html(u.title)} {html(u.desc)}
            </li>
          ))}
        </ul>

        <h2>{dict.home.comparison.title}</h2>
        {html(dict.home.comparison.intro)}
        <ul>
          {dict.home.comparison.items.map((c, i) => (
            <li key={i}>
              {html(c.title)} {html(c.desc)}
            </li>
          ))}
        </ul>

        <h2>{dict.home.tips.title}</h2>
        <ul>
          {dict.home.tips.items.map((t, i) => (
            <li key={i}>
              {html(t.title)} {html(t.desc)}
            </li>
          ))}
        </ul>

        <h2>{dict.home.ConclusionH1}</h2>
        {html(dict.home.conclusion)}
      </div>
    </section>
  );
};

export default Instructions;
