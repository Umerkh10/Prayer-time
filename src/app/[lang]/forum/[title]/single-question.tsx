"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { AnswerModal } from "@/components/ui/answer-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/UserAvatar";
import { urlSplitter } from "@/lib";
import { refactorDate } from "@/lib/date";
import {
  addAnswerLike,
  getAnswerLikeCount,
  getQuestionByTitle,
} from "@/services/forum";
import { motion } from "framer-motion";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

export default function QuestionPage() {
  const params = useParams();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const [question, setQuestion] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [userId, setUserId] = useState<any>(null);
  const [likedAnswers, setLikedAnswers] = useState<number[]>([]);
  const [isVerified, setIsVerified] = useState(false);

  const title = params?.title as string;

  useEffect(() => {
    setUrl(window.location.href);
  }, [pathname]);

  useEffect(() => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    if (parsedUser?.verification_status === 1) {
      setIsVerified(true);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  const fetchQuestionByTitle = async () => {
    try {
      const response = await getQuestionByTitle(title);

      if (response.status === 200) {
        setQuestion(response.data.question);
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestionByTitle();
  }, []);

  useEffect(() => {
    const storedLikes = JSON.parse(
      localStorage.getItem("likedAnswers") || "[]"
    );
    setLikedAnswers(storedLikes);
  }, []);

  const handleAddAnswerLike = async (answerId: number) => {
    if (!userId) {
      toast.error("User not found");
      return;
    }

    // Optimistically update UI
    setQuestion((prevQuestion: any) => ({
      ...prevQuestion,
      answers: prevQuestion.answers.map((answer: any) =>
        answer.id === answerId
          ? {
              ...answer,
              like_count:
                (answer.like_count || 0) +
                (likedAnswers.includes(answerId) ? -1 : 1),
            }
          : answer
      ),
    }));

    // Toggle liked state
    setLikedAnswers(
      (prev) =>
        prev.includes(answerId)
          ? prev.filter((id) => id !== answerId) // Remove like
          : [...prev, answerId] // Add like
    );

    try {
      const response = await addAnswerLike(answerId, userId);

      if (response.status === 201) {
        // Save liked answers to local storage (optional)
        localStorage.setItem("likedAnswers", JSON.stringify(likedAnswers));
      }
    } catch (error: any) {
      toast.error(error?.message);

      // Rollback UI if API fails
      setQuestion((prevQuestion: any) => ({
        ...prevQuestion,
        answers: prevQuestion.answers.map((answer: any) =>
          answer.id === answerId
            ? {
                ...answer,
                like_count:
                  (answer.like_count || 0) +
                  (likedAnswers.includes(answerId) ? 1 : -1),
              }
            : answer
        ),
      }));

      // Revert liked state
      setLikedAnswers(
        (prev) =>
          prev.includes(answerId)
            ? [...prev, answerId] // Restore like
            : prev.filter((id) => id !== answerId) // Remove like
      );
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserId(parsedUserData.id);
    }
  }, []);

  // useEffect(() => {
  //   // Find the question based on the slug
  //   const foundQuestion = mockQuestions.find((q) => q.slug === slug);
  //   if (foundQuestion) {
  //     setQuestion(foundQuestion);
  //     // Get all answers for this question
  //     const questionAnswers = mockAnswers.filter(
  //       (a) => a.questionId === foundQuestion.id
  //     );
  //     setAnswers(questionAnswers);
  //   }
  // }, [title]);

  // if (!question) {
  //   return (
  //     <div className="container mx-auto py-8 px-4 text-center">
  //       <h1 className="text-2xl font-bold mb-4">Question not found</h1>
  //       <Link href={`/${lang}/forum`}>
  //         <Button>
  //           <ArrowLeft className="mr-2 h-4 w-4" />
  //           Back to Forum
  //         </Button>
  //       </Link>
  //     </div>
  //   );
  // }

  if (isLoading) {
    return (
      <div className="px-8 mt-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="mt-3 h-screen rounded-lg w-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Breadcrumbs
            items={[
              { label: "Forum", href: `/${lang}/forum` },
              { label: "Question", href: `/${lang}/admin/questions` },
            ]}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-2 ">{question.title}</h1>
          <div className="flex justify-end items-center text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4 text-xs">
              <UserAvatar userName={question.user.fullname} />
              <div className="flex flex-col">
                <span>{question.user.fullname}</span>
                <span>Posted on {refactorDate(question.created_at)}</span>
              </div>
            </div>
          </div>
          <Card className="overflow-hidden border-primary/20 shadow-md">
            <CardContent className="pt-6">
              <p className="whitespace-pre-line">{question.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between py-3 border-t bg-muted/20">
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{question.answers.length}</span>
                </Button>
              </div>
              <div className="flex gap-2">
                <AnswerModal
                  questionId={question.id}
                  onAnswerAdded={fetchQuestionByTitle}
                  isVerified={isVerified}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={handleCopy}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 " />
          {question.answers.length} Answers
        </h2>
        <Separator className="mb-6" />

        {question.answers.length > 0 ? (
          <div className="space-y-6">
            {question.answers
              .slice()
              .reverse()
              .map((answer: any, index: any) => (
                <motion.div
                  key={answer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-primary/20 shadow-md">
                    <CardHeader className="pb-3 bg-muted/20">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <UserAvatar userName={answer.user.fullname} />
                          <span className="font-medium">
                            {answer.user.fullname}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {refactorDate(answer.created_at)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="whitespace-pre-line">{answer.answer}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between py-3 border-t bg-muted/20">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={() => handleAddAnswerLike(answer.id)}
                      >
                        {likedAnswers.includes(answer.id) ? (
                          <AiFillLike className="h-4 w-4 text-blue-500" /> // Outline when not liked
                        ) : (
                          <AiOutlineLike className="h-4 w-4 text-blue-500" /> // Filled color when liked
                        )}
                        <span>{answer.like_count}</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-muted/20 rounded-lg border border-primary/10">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-2">
              No answers yet. Be the first to answer!
            </p>
            <AnswerModal
              isVerified
              questionId={question.id}
              onAnswerAdded={fetchQuestionByTitle}
              buttonVariant="default"
              buttonSize="default"
              buttonClassName="text-zinc-50"
            />
          </div>
        )}
      </div>
    </div>
  );
}
