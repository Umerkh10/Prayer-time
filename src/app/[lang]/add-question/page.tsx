import type React from "react"
import AddQuestionPage from "./QuestionAdd"


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  return {
    title: `Ask a Question – Global Salah Forum`,
    description: `Have a question about prayer, faith, or Islamic teachings? Post your question on the Global Salah Forum and get answers from the community. Start the discussion now!`,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/add-question`,
      languages: {
        en: 'https://www.globalsalah.com/en/add-question',
        fr: 'https://www.globalsalah.com/fr/add-question',
        ar: 'https://www.globalsalah.com/ar/add-question',
        'x-default': 'https://www.globalsalah.com/en/add-question',
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


export default function Page() {
  return (
    <div >
      <AddQuestionPage />
    </div>
  )
}

