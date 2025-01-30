"use client"

import { motion } from "framer-motion"

const PrivacyContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background shadow-md rounded-lg p-8"
    >
      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly to us, such as when you create or modify your account, request
        services, contact customer support, or otherwise communicate with us.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to provide, maintain, and improve our services, such as to process and
        complete your prayer requests, and communicate with you.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
      <p className="mb-4">
        We may share the information we collect with third parties for various purposes, including to: comply with laws;
        respond to lawful requests and legal process; protect the rights and property of Global Salaah, our agents,
        customers, and others.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
      <p className="mb-4">
        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized
        access, disclosure, alteration and destruction.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
      <p className="mb-4">
        You may update, correct or delete information about you at any time by logging into your online account or by
        contacting us. You may also opt out of receiving promotional communications from us by following the
        instructions in those messages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Changes to this Policy</h2>
      <p className="mb-4">
        We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date
        at the top of the policy and, in some cases, we may provide you with additional notice.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
      <p>If you have any questions about this privacy policy, please contact us at: privacy@globalsalaah.com.</p>
    </motion.div>
  )
}

export default PrivacyContent

