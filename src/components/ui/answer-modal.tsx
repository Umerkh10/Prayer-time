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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserId(parsedUserData.id);
    }
  }, []);

  const handleSubmit = async () => {
    if (!answer.trim()) {
      toast.error("Please enter your answer");
      return;
    }

    setIsSubmitting(true);
    try {
      const answerDetail = { userId, questionId, answer };

      const response = await addAnswer(answerDetail);

      if (response.status === 201) {
        toast.success("Your answer has been posted!");
        setAnswer("");
        setOpen(false);
        onAnswerAdded();
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to post answer");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleIsVerified = () => {
    if (!isVerified) {
      toast.error("Please login verify your account first");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={buttonClassName}
          onClick={handleIsVerified}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
