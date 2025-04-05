"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { urlSplitter } from "@/lib";
import { refactorDate } from "@/lib/date";
import { getAllQuestions } from "@/services/forum";
import { motion } from "framer-motion";
import { MessageSquare, Plus, Search, ThumbsUp, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import UserDropdown from "./ui/user-dropdown";
import UserAvatar from "./UserAvatar";
import { getUserNotifications } from "@/services/notifications";
import { verifyEmail } from "@/services/authentication";

interface ForumPageProps {
  isLoggedIn: boolean;
  userData: any;
  onAddQuestion: () => void;
  setIsLoggedIn: (value: boolean) => void;
}

export default function ForumPage({
  isLoggedIn,
  setIsLoggedIn,
  userData,
  onAddQuestion,
}: ForumPageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = urlSplitter(pathname);
  const [questions, setQuestions] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(() =>
    questions
      ? questions.filter(
          (question: any) => question.question_status === "approved"
        )
      : []
  );
  const [currentPage, setCurrentPage] = useState(1);

  const [userDetailsInLS, setUserDetailsInLS] = useState(() => {
    const stored = localStorage.getItem("userData");
    return stored ? JSON.parse(stored) : null;
  });

  const [isVerified, setIsVerified] = useState(false);
  const [anyUnreadNotification, setAnyUnreadNotification] = useState(false);

  useEffect(() => {
    const user: any = localStorage.getItem("userData");
    const parsedUser = JSON.parse(user);
    if (parsedUser) {
      setUserDetailsInLS(parsedUser);
      if (userDetailsInLS.verification_status === 1 && userDetailsInLS.token) {
        setIsVerified(true);
      }
    }
  }, []);

  useEffect(() => {
    if (userDetailsInLS?.verification_status === 1 && userDetailsInLS?.token) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, [userDetailsInLS]);



  const questionsPerPage = 10;

  const filterQuestions = useCallback(() => {
    if (searchQuery.trim() === "") {
      setFilteredQuestions(
        questions.filter(
          (question: any) => question.question_status === "approved"
        )
      );
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = questions.filter(
        (question: any) =>
          question.question_status === "approved" &&
          question.title.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredQuestions(filtered);
    }
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    filterQuestions();
  }, [searchQuery, filterQuestions]);

  useEffect(() => {
    if (questions) {
      setFilteredQuestions(
        questions.filter(
          (question: any) => question.question_status === "approved"
        )
      );
    }
  }, [questions]);

  // Calculate pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

  const fetchAllQuestions = async () => {
    try {
      const response = await getAllQuestions();

      if (response.status === 200) {
        setQuestions(response.data.questions.reverse());
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const handleAddQuestionClick = () => {
    if (isLoggedIn && !isVerified) {
      toast.error("Please verify your account first");
    } else {
      onAddQuestion();
    }
  };

  const getFirstAnswer = (questionId: number) => {
    const question = questions?.find((q: any) => q.id === questionId);

    return question?.answers.find(
      (answer: any) => answer.answer_status === "approved"
    );
  };

  const fetchUserNotifications = async () => {
    try {
      const response = await getUserNotifications(userDetailsInLS.id);

      if (response.status === 200) {
        const isUnread = response.data.notifications.some(
          (notification: any) => notification.is_read === 0
        );

        setAnyUnreadNotification(isUnread);
      }
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userDetailsInLS) {
      fetchUserNotifications();
    }
  }, [userDetailsInLS]);

  const sendVerificationCode = async () => {
    try {
      const response = await verifyEmail(userDetailsInLS?.email);

      if (response.status === 200) {
        const user = response.data.user;

        // const updatedDetails = { ...user, isSignedUp: true };
        // localStorage.setItem("userData", JSON.stringify(updatedDetails));
        toast.success(response.data.message);

        router.push(`/${lang}/verify-code`);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="px-8 mt-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="mt-3 h-screen rounded-lg w-full" />
        </div>
      ) : (
        <div className="container mx-auto py-4 px-4">
            {!isVerified &&  userDetailsInLS?.token && (
              <div className="alert-bar w-full rounded-lg text-center capitalize  text-white">
                You are not verified click here{" "}
                <Button
                  className="!bg-inherit text-white px-0 capitalize pr-1 underline"
                  onClick={sendVerificationCode}
                >
                  email link
                </Button>
                to verify your account
              </div>
            )}
          <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-600/5 to-background rounded-xl p-8 mb-8 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h1 className="md:text-4xl text-2xl font-bold ">
                Global Salah Forum
              </h1>
              {isLoggedIn ? (
                <div className="font-semibold text-lg">
                  My Account
                  <div className="flex items-center gap-1 scale-110 justify-center mt-3">
                    <User />
                    <div className="relative">
                      <UserDropdown
                        userName={userData?.fullname}
                        userEmail={userData?.email}
                        setIsLoggedIn={setIsLoggedIn}
                        anyUnreadNotification={anyUnreadNotification}
                      />
                      {anyUnreadNotification && (
                        <span className="bg-red-600 w-2 h-2 rounded-full absolute right-0 top-0" />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Button variant="outline" size="sm" onClick={onAddQuestion}>
                  Login / Sign Up
                </Button>
              )}
            </div>
            <div className="max-w-3xl">
              <p className="text-muted-foreground md:text-lg text-sm md:text-left text-center mb-6">
                Connect with fellow believers, discuss Islamic insights, and
                enhance your Salah journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {isLoggedIn && isVerified ? (
                  <Link
                    href={`/${lang}/add-question`}
                    className="gap-2 flex md:justify-start justify-center py-3 px-4  rounded-xl bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    <Plus className="h-5 w-5" />
                    Ask a Question
                  </Link>
                ) : (
                  <Button
                    onClick={handleAddQuestionClick}
                    size="lg"
                    className="gap-2 bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    <Plus className="h-5 w-5" />
                    Ask a Question
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="md:col-span-1">
              <div className="sticky top-20 space-y-6">
                <Card className="overflow-hidden border-primary/20 shadow-md">
                  <CardHeader className="bg-primary/5 pb-3">
                    <h3 className="font-semibold text-lg">Search & Filters</h3>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search questions..."
                        className="pl-8 border-primary/20 focus-visible:ring-primary/30"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Showing {indexOfFirstQuestion + 1}-
                    {Math.min(indexOfLastQuestion, filteredQuestions.length)} of{" "}
                    {filteredQuestions.length} questions
                  </span>
                </div>
              </div>

              {filteredQuestions.length > 0 ? (
                <div className="space-y-4">
                  {filteredQuestions.map((question: any, index: any) => {
                    const firstAnswer = getFirstAnswer(question.id);

                    return (
                      <div key={question.id}>
                        <Link
                          className="space-y-4"
                          href={`/${lang}/forum/${question.title.replaceAll(
                            " ",
                            "-"
                          )}`}
                        >
                          <motion.div
                            key={question.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Card className="overflow-hidden border-green-600/20 shadow-md hover:shadow-lg transition-shadow">
                              <CardHeader className="pb-3">
                                <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center text-sm text-muted-foreground ">
                                  <h2 className="text-xl font-bold ">
                                    {question.title}
                                  </h2>
                                  <div className="flex items-center gap-4 mt-3 md:mt-0 text-xs">
                                    <UserAvatar userName={question.user.name} />
                                    <div className="flex flex-col">
                                      <span>{question.user.name}</span>
                                      <span>
                                        Posted on{" "}
                                        {refactorDate(question.created_at)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="line-clamp-3">
                                  {question.description}
                                </p>
                                {firstAnswer && (
                                  <div className="mt-4 pt-4 border-t border-primary/10 bg-muted/30 p-3 rounded-md">
                                    <div className="flex flex-col justify-start md:flex-row md:justify-between md:items-center items-start  mb-2 text-sm">
                                      <div className="flex items-center gap-2">
                                        {/* <Avatar className="h-5 w-5 border border-primary/20"> */}
                                        {/* <AvatarImage
                                        src={firstAnswer.user.avatar}
                                        alt={firstAnswer.author.name}
                                      /> */}
                                        {/* <AvatarFallback className="bg-primary/10 text-primary">
                                        {firstAnswer.author.initials}
                                      </AvatarFallback> */}
                                        {/* </Avatar> */}
                                        <span className="font-medium">
                                          {firstAnswer.user.name}
                                        </span>
                                      </div>
                                      <span className="text-muted-foreground">
                                        {refactorDate(firstAnswer.created_at)}
                                      </span>
                                    </div>
                                    <p className="text-sm line-clamp-2">
                                      {firstAnswer.answer}
                                    </p>
                                    <Button
                                      variant="link"
                                      size="sm"
                                      className="mt-1 h-auto p-0 text-primary"
                                    >
                                      View more replies
                                    </Button>
                                  </div>
                                )}
                              </CardContent>
                              <CardFooter className="flex justify-between py-3 border-t bg-muted/20">
                                <div className="flex gap-4">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-1"
                                  >
                                    <MessageSquare className="h-4 w-4" />
                                    <span>
                                      {
                                        question.answers.filter(
                                          (answer: any) =>
                                            answer.answer_status === "approved"
                                        ).length
                                      }
                                    </span>
                                  </Button>
                                </div>
                                <Link
                                  href={`/${lang}/forum/${question.title.replaceAll(
                                    " ",
                                    "-"
                                  )}`}
                                >
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-primary/20 hover:bg-green-700/10"
                                  >
                                    View Question
                                  </Button>
                                </Link>
                              </CardFooter>
                            </Card>
                          </motion.div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <Card className="text-center py-12 border-primary/20 shadow-md">
                  <h3 className="text-lg font-medium mb-2">
                    No questions found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or ask a new question
                  </p>
                  {isLoggedIn && isVerified ? (
                    <Link
                      href={`/${lang}/add-question`}
                      className="gap-2 w-[50%]  mx-auto flex py-3 px-4 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600"
                    >
                      <Plus className="h-5 w-5" />
                      Ask a Question
                    </Link>
                  ) : (
                    <Button
                      onClick={handleAddQuestionClick}
                      size="lg"
                      className="gap-2 bg-emerald-500 text-white hover:bg-emerald-600"
                    >
                      <Plus className="h-5 w-5" />
                      Add Question
                    </Button>
                  )}
                </Card>
              )}

              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(page);
                            }}
                            isActive={page === currentPage}
                            className={
                              page === currentPage
                                ? "bg-emerald-500 text-white"
                                : ""
                            }
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            setCurrentPage(currentPage + 1);
                        }}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
