"use client"
import { notFound, usePathname } from "next/navigation"
import { ResponsiveAdminDashboard } from "@/components/responsive-admin-dashboard"
import { QuestionDetail } from "@/components/question-detail"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { urlSplitter } from "@/lib"

// Mock data for questions and answers
const mockQuestions = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  title: `How do I implement ${i % 2 === 0 ? "authentication" : "authorization"} in my ${i % 3 === 0 ? "React" : "Next.js"} application?`,
  content: `I'm trying to build a secure application and need help with implementing ${i % 2 === 0 ? "authentication" : "authorization"} in my project. I've looked at several libraries but I'm not sure which approach is best. Can someone provide guidance on the best practices?`,
  answers: Math.floor(Math.random() * 10),
  status: ["on hold", "approved", "rejected"][Math.floor(Math.random() * 3)],
  username: `user${i + 1}`,
  createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
}))

const mockAnswers = (questionId: number) =>
  Array.from({ length: Math.floor(Math.random() * 8) + 1 }).map((_, i) => ({
    id: i + 1,
    content: `You should consider using ${["JWT", "OAuth", "Firebase Auth", "Auth0", "NextAuth.js"][Math.floor(Math.random() * 5)]} for your authentication needs. It's well-documented and has good community support.`,
    username: `answerer${i + 1}`,
    status: ["on hold", "approved", "rejected"][Math.floor(Math.random() * 3)],
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 5000000000)).toISOString(),
  }))

export default function QuestionPage({ params }: { params: { id: string } }) {
  const questionId = Number.parseInt(params.id)
  const pathname = usePathname();
  const lang = urlSplitter(pathname)

  // Find the question
  const question = mockQuestions.find((q) => q.id === questionId)

  if (!question) {
    notFound()
  }

  // Get answers for this question
  const answers = mockAnswers(questionId)

  return (
    <ResponsiveAdminDashboard title={`Question #${questionId}`}>
      <div className="space-y-4 md:space-y-6">
        <Breadcrumbs
          items={[
            { label: "Admin", href: `/${lang}/admin` },
            { label: "Questions", href: `/${lang}/admin/questions` },
            { label: `Question #${questionId}`, href: `/${lang}/admin/questions/${questionId}` },
          ]}
        />
        <QuestionDetail question={question} answers={answers} />
      </div>
    </ResponsiveAdminDashboard>
  )
}

