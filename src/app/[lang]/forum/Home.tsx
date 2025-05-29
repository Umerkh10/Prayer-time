"use client";

import { useState, useEffect } from "react";
import AuthModal from "@/components/ui/auth-modal";
import ForumPage from "@/components/forum-page";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        let userData = localStorage.getItem("userData");
        if (!userData) {
          const guestUser = { guest: true, canAccessForum: true };
          localStorage.setItem("userData", JSON.stringify(guestUser));
          userData = JSON.stringify(guestUser);
        }
        const parsedUser = JSON.parse(userData);
        if (parsedUser?.token || parsedUser?.canAccessForum) {
          setIsLoggedIn(!!parsedUser.token); // Only true if token exists
          setUserDetails(parsedUser);
        }
      } catch (err) {
        console.error("Failed to parse userData", err);
      }
    }
  }, []);
  

  const handleAddQuestion = () => {
    setShowAuthModal(true);
    setActiveTab("login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <ForumPage
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        onAddQuestion={handleAddQuestion}
        // onLogout={handleLogout}
        userData={userDetails}
      />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        setShowAuthModal={setShowAuthModal}
        setIsLoggedIn={setIsLoggedIn}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </main>
  );
}
