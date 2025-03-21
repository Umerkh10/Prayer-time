"use client";

import { useState, useEffect } from "react";
import AuthModal from "@/components/ui/auth-modal";
import ForumPage from "@/components/forum-page";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    if (parsedUser?.token) {
      setIsLoggedIn(true);
      setUserDetails(parsedUser);
    } else {
      setShowAuthModal(true)
    }
  }, []);

  // const handleLogin = () => {
  //   localStorage.setItem("isLoggedIn", "true");
  //   setIsLoggedIn(true);
  //   setShowAuthModal(false);
  // };

  // const handleLogout = () => {
  //   localStorage.setItem("isLoggedIn", "false");
  //   setIsLoggedIn(false);
  // };

  const handleAddQuestion = () => {
      setShowAuthModal(true);
      setActiveTab("login");
  };

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       Loading...
  //     </div>
  //   );
  // }

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
