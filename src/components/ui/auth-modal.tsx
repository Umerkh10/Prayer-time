"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "login" | "signup";
  setActiveTab: (tab: "login" | "signup") => void;
  setShowAuthModal: (value: boolean) => void;
  setIsLoggedIn: (value: boolean) => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  setShowAuthModal,
  setIsLoggedIn,
}: AuthModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent style={{ zIndex: 1001 }}  className="sm:max-w-[425px]  border-primary/20 shadow-lg md:scale-90 scale-75">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 " />
            </div>
            <DialogTitle className="text-center text-xl font-bold">
              Welcome to Global Salah Forum
            </DialogTitle>
          </DialogHeader>
          <Tabs
            defaultValue={activeTab}
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "login" | "signup")}
            className="w-full mt-4"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm
                setShowAuthModal={setShowAuthModal}
                setIsLoggedIn={setIsLoggedIn}
                onSignUpClick={() => setActiveTab("signup")}
              />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm onLoginClick={() => setActiveTab("login")} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
