import React from 'react'
import PrivacyContent from './PrivacyContent'

function page() {
  return (
    <div className="min-h-screen ">
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">Privacy Policy</h1>
      <PrivacyContent/>
    </main>
  </div>
  )
}

export default page