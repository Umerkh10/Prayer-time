"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { addAnswer } from "@/services/forum";
import CustomCaptcha from "./common/CustomCaptcha";

interface AnswerModalProps {
  questionId: string;
  onAnswerAdded: () => void;
  buttonVariant?: "default" | "outline" | "ghost";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
  buttonText?: string;
  isVerified: boolean;
}

export function AnswerModal({
  questionId,
  isVerified,
  onAnswerAdded,
  buttonVariant = "outline",
  buttonSize = "sm",
  buttonClassName = "",
  buttonText = "Post an Answer",
}: AnswerModalProps) {
  const [answer, setAnswer] = useState("");
  const [userId, setUserId] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserId(parsedUserData.id);
    }
  }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserId(parsedUserData.id);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!isCaptchaVerified) {
    //   return;
    // }
    if (!answer.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const answerDetail = { userId, questionId, answer };

      const response = await addAnswer(answerDetail);

      if (response.status === 201) {
        setAnswer("");
        setOpen(false);
        onAnswerAdded();
      }
    } catch (error: any) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={buttonClassName}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] z-[1000]">
        <DialogHeader>
          <DialogTitle>Post Your Answer</DialogTitle>
          <DialogDescription>
            Share your knowledge with the community. Be clear and provide
            details in your answer.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Write your answer here..."
            className="min-h-[200px]"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <DialogFooter>
          {/* <CustomCaptcha setIsVerified={setIsCaptchaVerified} /> */}
        </DialogFooter>

        <div className="flex justify-end items-end gap-3">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button
            className="text-white bg-emerald-600 hover:bg-emerald-800"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post Answer"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
