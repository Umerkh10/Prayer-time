"use client"

import { useState, useEffect } from "react"
import AuthModal from "@/components/ui/auth-modal"
import ForumPage from "@/components/forum-page"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is logged in (mock implementation)
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(userLoggedIn)
    setIsLoading(false)

    // Show auth modal on page load if not logged in
    if (!userLoggedIn) {
      setShowAuthModal(true)
    }
  }, [])

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true")
    setIsLoggedIn(true)
    setShowAuthModal(false)
  }

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false")
    setIsLoggedIn(false)
  }

  const handleAddQuestion = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true)
      setActiveTab("login")
    } else {
      // Handle adding question logic
      console.log("Add question")
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <ForumPage isLoggedIn={isLoggedIn} onAddQuestion={handleAddQuestion} onLogout={handleLogout} userData={{
        name: "",
        initials: "",
        avatar: ""
      }} />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogin={handleLogin}
      />
    </main>
  )
}

