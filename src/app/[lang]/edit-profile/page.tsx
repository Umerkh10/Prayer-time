import React from 'react'
import EditProfilePage from './EditProfilePage'

export async function generateMetadata({ params }: any) {
  const lang = params.lang
  return {
    title: `Edit Profile – Global Salah`,
    description: `Update your profile on Global Salah to personalize your experience. Manage your details, preferences, and settings for a seamless community engagement.`,
alternates: {
  canonical: `https://www.globalsalah.com/${lang}/edit-profile`,
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
      <EditProfilePage/>
    </div>
  )
}

export default page