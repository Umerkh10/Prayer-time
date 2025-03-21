"use client";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardFooter,CardHeader,} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {Pagination,PaginationContent,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious,} from "@/components/ui/pagination";
import { urlSplitter } from "@/lib";
import { refactorDate } from "@/lib/date";
import { getAllQuestions } from "@/services/forum";
import { motion } from "framer-motion";
import { MessageSquare, Plus, Search, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import UserDropdown from "./ui/user-dropdown";

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
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;




  // Calculate pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const fetchAllQuestions = async () => {
    try {
      const response = await getAllQuestions();

      if (response.status === 200) {
        setQuestions(response.data.questions.reverse())
      }
      console.log(response.data.questions);
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchAllQuestions()
  }, []);


  const handleAddQuestionClick = () => {
    if (isLoggedIn) {
      router.push(`/${lang}/add-question`);
    } else {
      onAddQuestion();
    }
  };

  const userFullname = userData?.fullname?.split(" ");
  const userAvatar = userFullname
    ? `${userFullname[0]?.charAt(0)}`
    : "";
  return (
    <>
    {isLoading ? <div className='px-8 mt-4'>
      <Skeleton className="h-48 w-full" />
      <Skeleton className="mt-3 h-screen rounded-lg w-full" />
     
    </div> :
      (<div className="container mx-auto py-4 px-4">
      <div className="w-full rounded-lg my-2 text-center capitalize bg-orange-700 text-white">
        You are not verified click here  <Link className="underline" href={`/${lang}/verify-email`}>
          mock email link</Link> to verify your account
      </div>
      <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-600/5 to-background rounded-xl p-8 mb-8 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold ">Global Salah Forum</h1>
          {isLoggedIn ? (
            <UserDropdown
              userName={userData?.fullname}
              userEmail={userData?.email}
              setIsLoggedIn={setIsLoggedIn}
              // userInitials={userData.initials}
              // unreadNotifications={userData.unreadNotifications}
              userAvatar={userAvatar}
            />
          ) : (
            <Button variant="outline" size="sm" onClick={onAddQuestion}>
              Login / Sign Up
            </Button>
          )}
        </div>
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-lg mb-6">
            Join the conversation with fellow developers and find solutions to
            your coding challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {isLoggedIn ? (
              <Link
                href={`/${lang}/add-question`}
                className="gap-2 flex py-3 px-4  rounded-xl bg-emerald-500 text-white hover:bg-emerald-600"
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
          <div className="sticky top-4 space-y-6">
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
                {Math.min(indexOfLastQuestion, questions.length)} of{" "}
                {questions.length} questions
              </span>
            </div>
          </div>

          {questions.length > 0 ? (
            <div className="space-y-4">
              {questions.map((question:any, index:any) => {
                
                return (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="overflow-hidden border-green-600/20 shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <Link
                          href={`/}`}
                          className="hover:underline"
                        >
                          <h2 className="text-xl font-bold ">
                            {question.title}
                          </h2>
                        </Link>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                           
                            <span>{question.user.name}</span>
                          </div>
                          <span>Posted on {refactorDate(question.created_at)}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3">{question.description}</p>

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
                        <Link href={`/${lang}/forum/${question.title}`}>
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
                );
              })}
            </div>
          ) : (
            <Card className="text-center py-12 border-primary/20 shadow-md">
              <h3 className="text-lg font-medium mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or ask a new question
              </p>
              <Button onClick={handleAddQuestionClick} className="mx-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
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
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
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
    </div>)}
    </>
  )
}