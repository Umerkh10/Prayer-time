import React from 'react'
import Home from './Home'


export async function generateMetadata({ params }: any) {
    const lang = params.lang
    return {
      title: `Global Salah Forum – Connect, Discuss & Share Islamic Knowledge`,
      description: `Join the Global Salah Forum to connect with fellow Muslims, discuss Islamic topics, and share knowledge on prayer, faith, and community. Engage in meaningful conversations today!`,
      alternates: {
        canonical: `https://www.globalsalah.com/${lang}/forum`,
        en: `https://www.globalsalah.com/en/forum`,
        fr: `https://www.globalsalah.com/fr/forum`,
        ar: `https://www.globalsalah.com/ar/forum`,
        'x-default': `https://www.globalsalah.com/en/forum`,
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
            <Home />
        </div>
    )
}

export default page