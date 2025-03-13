import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./(Home)/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./(Home)/Footer";

const poppins = Poppins({
  subsets: ['latin'], // Specify character subsets
  weight: ['300', '400','500','600', '700','800','900'], // Specify weights to preload
  variable: '--font-poppins-sans', // Define a custom CSS variable for the font
});



export const metadata: Metadata = {
  title: "Global Salah",
  description: "Global Salah is a platform that helps you find the most accurate prayer times  for your location.",
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

  <script
    src="https://cdn.jsdelivr.net/gh/manuelmhtr/countries-and-timezones@latest/dist/index.min.js"
    type="text/javascript"
  ></script>

  return (
    <html  lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
