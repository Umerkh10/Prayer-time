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
