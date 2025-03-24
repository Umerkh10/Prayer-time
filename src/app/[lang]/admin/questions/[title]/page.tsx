"use client";
import { notFound, useParams, usePathname } from "next/navigation";
import { ResponsiveAdminDashboard } from "@/components/responsive-admin-dashboard";
import { QuestionDetail } from "@/components/question-detail";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { urlSplitter } from "@/lib";
import { getQuestionByTitle } from "@/services/forum";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for questions and answers
const mockQuestions = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  title: `How do I implement ${
    i % 2 === 0 ? "authentication" : "authorization"
  } in my ${i % 3 === 0 ? "React" : "Next.js"} application?`,
  content: `I'm trying to build a secure application and need help with implementing ${
    i % 2 === 0 ? "authentication" : "authorization"
  } in my project. I've looked at several libraries but I'm not sure which approach is best. Can someone provide guidance on the best practices?`,
  answers: Math.floor(Math.random() * 10),
  status: ["on hold", "approved", "rejected"][Math.floor(Math.random() * 3)],
  username: `user${i + 1}`,
  createdAt: new Date(
    Date.now() - Math.floor(Math.random() * 10000000000)
  ).toISOString(),
}));

const mockAnswers = (questionId: number) =>
  Array.from({ length: Math.floor(Math.random() * 8) + 1 }).map((_, i) => ({
    id: i + 1,
    content: `You should consider using ${
      ["JWT", "OAuth", "Firebase Auth", "Auth0", "NextAuth.js"][
        Math.floor(Math.random() * 5)
      ]
    } for your authentication needs. It's well-documented and has good community support.`,
    username: `answerer${i + 1}`,
    status: ["on hold", "approved", "rejected"][Math.floor(Math.random() * 3)],
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 5000000000)
    ).toISOString(),
  }));

export default function QuestionPage() {
  const [question, setQuestion] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(true);

  const pathname = usePathname();
  const lang = urlSplitter(pathname);

  const params = useParams();
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
  useEffect(() => {
    fetchQuestionByTitle();
  }, []);

  const answers = question?.answers || [];

  if (isLoading) {
    return (
      <div className="px-8 mt-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="mt-3 h-screen rounded-lg w-full" />
      </div>
    );
  }

  return (
    <ResponsiveAdminDashboard title={`Question #${question.id}`}>
      <div className="space-y-4 md:space-y-6">
        <Breadcrumbs
          items={[
            { label: "Admin", href: `/${lang}/admin` },
            { label: "Questions", href: `/${lang}/admin/questions` },
            {
              label: `Question #${question.id}`,
              href: `/${lang}/admin/questions/${question.id}`,
            },
          ]}
        />
        <QuestionDetail question={question} answers={answers} />
      </div>
    </ResponsiveAdminDashboard>
  );
}
