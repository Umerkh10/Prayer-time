"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Share2,
  BookmarkPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import { urlSplitter } from "@/lib";
import { mockAnswers, mockQuestions } from "@/lib/mock-data";
import { getQuestionByTitle } from "@/services/forum";
import { toast } from "sonner";
import { refactorDate } from "@/lib/date";
import UserAvatar from "@/components/UserAvatar";

export default function QuestionPage() {
  const params = useParams();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const [question, setQuestion] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const title = params?.title as string;

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
  console.log("question", question);
  useEffect(() => {
    fetchQuestionByTitle();
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

  if (!question) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Question not found</h1>
        <Link href={`/${lang}/forum`}>
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Forum
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href={`/${lang}/forum`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Forum
          </Button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-2 ">{question.title}</h1>
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <UserAvatar userName={question.user.fullname} />
              <span>{question.user.fullname}</span>
            </div>
            <span>Posted on {refactorDate(question.created_at)}</span>
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
                  <ThumbsUp className="h-4 w-4" />
                  {/* <span>{question.likes}</span> */}
                </Button>
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
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 hover:bg-primary/10"
                >
                  Reply
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
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
            {question.answers.map((answer: any, index: any) => (
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
                        <UserAvatar userName={answer.user.fullname  } />
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
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{answer.likes}</span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-muted/20 rounded-lg border border-primary/10">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No answers yet. Be the first to answer!
            </p>
            <Button className="mt-4">Post an Answer</Button>
          </div>
        )}
      </div>
    </div>
  );
}
