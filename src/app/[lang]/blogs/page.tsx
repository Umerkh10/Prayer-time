import { Metadata } from "next";
import Head from "next/head";
import Blogs from "./Blogs";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = 'Blogues';
      description = 'Tous les blogues';
      break;
    case 'ar':
      title = 'المدونات';
      description = 'جميع المدونات';
      break;
    default:
      title = 'Blogs';
      description = 'All Blogs';
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://globalsalah.com/${lang}/blogs`,
    },
  };
}

type PageProps = {
  params: {
    lang: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { lang } = params;
  <Head>
    <title>Blogs</title>
  </Head>;

  return (
    <>
      {" "}
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blogs" />
        <meta property="og:description" content="All Blogs" />
        <meta
          property="og:url"
          content="https://globalsalah.com/en/blogs"
        />
        <meta property="og:site_name" content="GlobalSalah" />
        <meta
          property="og:image"
          content="https://globalsalah.com/en/assets/weblogo.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://globalsalah.com/en/assets/popupModal.webp"
        />
        <meta property="og:image:width" content="1050" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Blogs" />
        <meta property="og:image:type" content="image/webp" />
        <meta
          property="article:published_time"
          content="2024-11-23T02:45:46-04:00"
        />
        <meta
          property="article:modified_time"
          content="2024-11-23T06:15:41-04:00"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/globalsalahofficial/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs" />
        <meta name="twitter:description" content="All Blogs" />
        <meta name="twitter:creator" content="@takemyclas19231" />
        <meta
          name="twitter:image"
          content="https://globalsalah.com/en/assets/weblogo.png"
        />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="51 minutes" />
      </Head>
      <Blogs lang={lang} />
    </>
  );
};

export default Page;
