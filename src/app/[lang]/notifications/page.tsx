import React from 'react'
import NotificationsPage from './NotificationsPage'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Global Salah Notifications – Stay Updated on Prayer & Community Alerts`,
    description: `Get real-time updates with Global Salah notifications. Stay informed on prayer times, community events, and important announcements. Never miss an update!`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/notifications`,
  en: `https://www.globalsalah.com/en/notifications`,
  fr: `https://www.globalsalah.com/fr/notifications`,
  ar: `https://www.globalsalah.com/ar/notifications`,
  'x-default': `https://www.globalsalah.com/en/notifications`,
},
robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
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
        <NotificationsPage/>
    </div>
  )
}

export default page