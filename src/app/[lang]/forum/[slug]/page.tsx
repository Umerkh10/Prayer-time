import React from 'react'
import QuestionPage from './single-question'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  const slug = params?.slug as string
  const metaslug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${metaslug} – Global Salah Forum Discussion`,
    description: `Explore answers and join the discussion on ${metaslug} in the Global Salah Forum. Share your insights, ask follow-up questions, and connect with the community.`,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/forum/${slug}`,
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function page() {
  return (
    <div>
      <QuestionPage />
    </div>
  )
}

export default page