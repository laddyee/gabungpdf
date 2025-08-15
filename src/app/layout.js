import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";
import { LanguageProvider, useLanguage } from "../../lib/languageContext";
import { Navbar } from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata = {
  title: "Combine PDF Online Free - Merge PDF Files Easily & Quickly",
  description: "Combine PDF documents online for free with GabungPDF.id. Easy-to-use PDF combiner, no installation, no registration. Easily merge PDFs now!",
   alternates: {
      canonical: `https://www.gabungpdf.id`,
    },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
    {/* <head>
            <link
              rel="canonical"
              href={`https://www.gabungpdf.id`}
              key="canonical"
            />
          </head> */}
      <body suppressHydrationWarning>
        <ThemeProvider defaultTheme="light">
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
