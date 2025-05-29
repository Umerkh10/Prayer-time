import Head from "next/head";
import { usePathname } from "next/navigation";
import React from "react";

type SocialShareProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
};

const SocialShare = ({ imageUrl, title, description }: SocialShareProps) => {
  const pathname = usePathname() || "/"; // Default to "/" if pathname is undefined
  const BASE_URL = "https://globalsalah.com/en";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}${pathname}`,
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${BASE_URL}${pathname}`,
    twitter: `https://twitter.com/share?url=${BASE_URL}${pathname}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${BASE_URL}${pathname}&media=${imageUrl}&description=${description}`,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={`${BASE_URL}${pathname}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div className="mt-12 flex items-center justify-center gap-4">
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Share on Facebook" />
        </a>
        <a href={shareLinks.linkedIn} target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="Share on LinkedIn" />
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <img src="/twitter.png" alt="Share on Twitter" />
        </a>
        <a
          href={shareLinks.pinterest}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/pinterest.png" alt="Share on Pinterest" />
        </a>
      </div>
    </>
  );
};

export default SocialShare;
