import React from 'react'
import QuestionSubmit from './QuestionSubmit'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Question Submitted – Global Salah`,
    description: ` Your question has been successfully submitted on Global Salah. Our community will review and respond soon. Stay tuned for insightful discussions and answers!`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/question-submitted`,
  en: `https://www.globalsalah.com/en/question-submitted`,
  fr: `https://www.globalsalah.com/fr/question-submitted`,
  ar: `https://www.globalsalah.com/ar/question-submitted`,
  'x-default': `https://www.globalsalah.com/en/question-submitted`,
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
      <QuestionSubmit/>
    </div>
  )
}

export default page