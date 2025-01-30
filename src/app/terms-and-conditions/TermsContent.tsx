"use client"

import { motion } from "framer-motion"

const TermsContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background shadow-md rounded-lg p-8"
    >
      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing and using Global Salaah, you accept and agree to be bound by the terms and provision of this
        agreement.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Use of the Service</h2>
      <p className="mb-4">
        You agree to use Global Salaah only for purposes that are permitted by these Terms and any applicable law,
        regulation, or generally accepted practices or guidelines in the relevant jurisdictions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
      <p className="mb-4">
        To access some features of Global Salaah, you may be required to create an account. You are responsible for
        maintaining the confidentiality of your account and password.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Content</h2>
      <p className="mb-4">
        Our Service allows you to post, link, store, share and otherwise make available certain information, text,
        graphics, videos, or other material. You are responsible for the content that you post to the Service.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
      <p className="mb-4">
        The Service and its original content, features, and functionality are and will remain the exclusive property of
        Global Salaah and its licensors.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
        liability, under our sole discretion, for any reason whatsoever and without limitation.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a
        material change will be determined at our sole discretion.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at terms@globalsalaah.com.</p>
    </motion.div>
  )
}

export default TermsContent

