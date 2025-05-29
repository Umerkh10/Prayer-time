"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminPagination } from "./admin-pagination";
import { usePathname } from "next/navigation";
import { urlSplitter } from "@/lib";
import { getAllQuestions } from "@/services/forum";
import { toast } from "sonner";

const mockQuestions = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  title: `How do I implement ${
    i % 2 === 0 ? "authentication" : "authorization"
  } in my ${i % 3 === 0 ? "React" : "Next.js"} application?`,
  answers: Math.floor(Math.random() * 10),
  status: ["on hold", "approved", "rejected"][Math.floor(Math.random() * 3)],
  username: `user${i + 1}`,
}));

interface QuestionsTableProps {
  currentPage: number;
}

export function QuestionsTable({ currentPage }: QuestionsTableProps) {
  const [questions, setQuestions] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  const lang = urlSplitter(pathname);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(mockQuestions.length / itemsPerPage);

  // useEffect(() => {
  //   // In a real app, this would be an API call with pagination
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   setQuestions(mockQuestions.slice(startIndex, endIndex));
  // }, [currentPage]);
  
  const fetchQuestions = debounce((lang) => {
    fetch(`/api/get-all-questions?lang=${lang}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      });
  }, 500); // Adjust debounce time as necessary

  useEffect(() => {
    setIsLoading(true);
    fetchQuestions(lang);
  }, [lang]);

  // useEffect(() => {
  //   fetchAllQuestions();
  // }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">S.No</TableHead>
              <TableHead>Question Title</TableHead>
              <TableHead className="w-32 text-center">Answers</TableHead>
              <TableHead className="w-24 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question: any, index: any) => (
              <TableRow key={question.id}>
                <TableCell className="font-medium">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </TableCell>
                <TableCell className="max-w-md truncate">
                  {question.title}
                </TableCell>
                <TableCell className="text-center">
                  {question.answers.length}
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild size="sm" variant="outline">
                    <Link
                      href={`/${lang}/admin/questions/${question.title.replaceAll(
                        " ",
                        "-"
                      ).replaceAll(
                        "?",
                        ""
                      )}`}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <AdminPagination currentPage={currentPage} totalPages={totalPages} /> */}
    </div>
  );
}
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

