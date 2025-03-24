import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./(Home)/Footer";
import { Toaster } from "sonner";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin-sidebar";
import Head from "next/head";
import Script from "next/script";

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
          <Navbar />
          <Toaster richColors />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
