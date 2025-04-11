import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import Footer from "./(Home)/Footer";
import Navbar from "./(Home)/Navbar";
import "./globals.css";
import HtmlLangSetter from "@/components/HtmlLangSetter";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins-sans',
});

export const metadata: Metadata = {
  title: "Global Salah",
  description: "Global Salah is a platform that helps you find the most accurate prayer times for your location.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <meta name="google-site-verification" content="0likJSP3-if8goGabTQOnxr1vNU8eh-XAd8JWDk3ZyU" />
        <link rel="alternate" hrefLang="fr" href="https://www.globalsalah.com/fr" />
        <link rel="alternate" hrefLang="ar" href="https://www.globalsalah.com/ar" />

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KVK6TX0YCX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KVK6TX0YCX');
        `}
      </Script>

      <Script
        src="https://cdn.jsdelivr.net/gh/manuelmhtr/countries-and-timezones@latest/dist/index.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/5dcbb80ae3d7d4ff3df3c423/script.js"
        strategy="afterInteractive"
      />

      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HtmlLangSetter />
          <Navbar />
          <Toaster richColors />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
