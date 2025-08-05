import { getDictionary } from "../../../lib/dictionaries";
import { LanguageProvider } from "../../../lib/languageContext";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  const dict = await getDictionary(lang);

  return {
    title: dict?.Seo?.Home?.title || "Default Title",
    description: dict?.Seo?.Home?.description || "Default description",
     alternates: {
      canonical: `https://www.gabungpdf.id/${lang}`,
    },
  };
}

export default async function LangLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "en";

  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider lang={lang}>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
