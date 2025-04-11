import React from 'react'
import AnswerSubmitted from './AnswerSubmitted'

export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  return {
    title: `Answer Submitted Successfully – Global Salah Forum`,
    description: `Your answer has been submitted successfully! Thank you for your response. Stay tuned for updates or submit another answer if needed.`,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/answer-submitted`,
      languages: {
        en: 'https://www.globalsalah.com/en/answer-submitted',
        fr: 'https://www.globalsalah.com/fr/answer-submitted',
        ar: 'https://www.globalsalah.com/ar/answer-submitted',
        'x-default': 'https://www.globalsalah.com/en/answer-submitted',
      },
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
        <AnswerSubmitted/>
    </div>
  )
}

export default page