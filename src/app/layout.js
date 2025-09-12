import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeProvider/theme-provider";
import { LanguageProvider, useLanguage } from "../../lib/languageContext";
import { Navbar } from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Script from 'next/script'

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
    <head>
      <meta
          name="google-site-verification"
          content="t138eMpYM3qAs_tf6sDhfG7R1Nr1BFSXzjr9r441oY4"
        />
{/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BPR6QQ37L4"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BPR6QQ37L4', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
          </head>
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
