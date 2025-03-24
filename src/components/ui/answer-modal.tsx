"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { addAnswer } from "@/services/forum"
import CustomCaptcha from "./common/CustomCaptcha"

interface AnswerModalProps {
    questionId: string
    onAnswerAdded: () => void
    buttonVariant?: "default" | "outline" | "ghost"
    buttonSize?: "default" | "sm" | "lg" | "icon"
    buttonClassName?: string
    buttonText?: string
}

export function AnswerModal({
    questionId,
    onAnswerAdded,
    buttonVariant = "outline",
    buttonSize = "sm",
    buttonClassName = "",
    buttonText = "Post an Answer",
}: AnswerModalProps) {
    const [answer, setAnswer] = useState("")
    const [userId, setUserId] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isVerified, setIsVerified] = useState(false);
    const [open, setOpen] = useState(false)



    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserId(parsedUserData.id);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isVerified) {
            toast.error("Please Verify the Captcha");
            return;
        }
        if (!answer.trim()) {
            toast.error("Please enter your answer")
            return
        }

        setIsSubmitting(true)
        try {
            const answerDetail = { userId, questionId, answer };

            const response = await addAnswer(answerDetail);

            if (response.status === 201) {
                toast.success("Your answer has been posted!")
                setAnswer("")
                setOpen(false)
                onAnswerAdded()
            }
        } catch (error: any) {
            toast.error(error?.message || "Failed to post answer")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={buttonVariant} size={buttonSize} className={buttonClassName}>
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Post Your Answer</DialogTitle>
                    <DialogDescription>
                        Share your knowledge with the community. Be clear and provide details in your answer.
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
                    <Button variant="outline" onClick={() => setOpen(false)} disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <CustomCaptcha  setIsVerified={setIsVerified} />

                    <Button className="text-white bg-emerald-600 hover:bg-emerald-800" onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? "Posting..." : "Post Answer"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

