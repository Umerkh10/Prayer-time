"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ConfirmationModal } from "./confirmation-modal"
import { formatDistanceToNow } from "@/lib/formatDate"

interface Question {
  id: number
  title: string
  content: string
  status: string
  username: string
  createdAt: string
}

interface Answer {
  id: number
  content: string
  username: string
  status: string
  createdAt: string
}

interface QuestionDetailProps {
  question: Question
  answers: Answer[]
}

export function QuestionDetail({ question, answers }: QuestionDetailProps) {
  const [questionStatus, setQuestionStatus] = useState(question.status)
  const [answerStatuses, setAnswerStatuses] = useState<Record<number, string>>(
    answers.reduce((acc, answer) => ({ ...acc, [answer.id]: answer.status }), {}),
  )

  // Modal states
  const [approveModalOpen, setApproveModalOpen] = useState(false)
  const [declineModalOpen, setDeclineModalOpen] = useState(false)
  const [answerApproveModalOpen, setAnswerApproveModalOpen] = useState<number | null>(null)
  const [answerDeclineModalOpen, setAnswerDeclineModalOpen] = useState<number | null>(null)

  const handleQuestionApprove = () => {
    setQuestionStatus("approved")
    // In a real app, you would make an API call here
  }

  const handleQuestionReject = () => {
    setQuestionStatus("rejected")
    // In a real app, you would make an API call here
  }

  const handleAnswerStatusChange = (answerId: number, status: string) => {
    setAnswerStatuses((prev) => ({ ...prev, [answerId]: status }))
    // In a real app, you would make an API call here
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500 text-white">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-500 text-white">Rejected</Badge>
      default:
        return <Badge className="bg-yellow-500 text-white">On Hold</Badge>
    }
  }

  return (
    <div className="space-y-8 ">
      {/* Question Approve Modal */}
      <ConfirmationModal
        isOpen={approveModalOpen}
        onClose={() => setApproveModalOpen(false)}
        onConfirm={handleQuestionApprove}
        title="Approve Question"
        description="Are you sure you want to approve this question? It will be visible to all users."
        confirmText="Approve"
        variant="default"
      />

      {/* Question Decline Modal */}
      <ConfirmationModal
        isOpen={declineModalOpen}
        onClose={() => setDeclineModalOpen(false)}
        onConfirm={handleQuestionReject}
        title="Decline Question"
        description="Are you sure you want to decline this question? It will be hidden from users."
        confirmText="Decline"
        variant="destructive"
      />

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-4">{question.title}</h1>
              <p className="text-gray-700 dark:text-gray-300">{question.content}</p>
            </div>
            <div className="md:w-48 space-y-2 flex flex-col items-start md:items-end">
              <div className="text-sm text-gray-500">
                Posted by <span className="font-medium">{question.username}</span>
              </div>
              <div className="text-sm text-gray-500">{formatDistanceToNow(new Date(question.createdAt))} ago</div>
              {getStatusBadge(questionStatus)}
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 py-4 bg-muted/50 flex justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
            onClick={() => setDeclineModalOpen(true)}
            disabled={questionStatus === "rejected"}
          >
            <X className="h-4 w-4 mr-1" />
            Decline
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-green-500 border-green-200 hover:bg-green-50 hover:text-green-600"
            onClick={() => setApproveModalOpen(true)}
            disabled={questionStatus === "approved"}
          >
            <Check className="h-4 w-4 mr-1" />
            Approve
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Answers ({answers.length})</h2>

        {answers.length === 0 ? (
          <p className="text-muted-foreground">No answers yet.</p>
        ) : (
          <div className="space-y-4">
            {answers.map((answer) => (
              <Card key={answer.id}>
                {/* Answer Approve Modal */}
                <ConfirmationModal
                  isOpen={answerApproveModalOpen === answer.id}
                  onClose={() => setAnswerApproveModalOpen(null)}
                  onConfirm={() => handleAnswerStatusChange(answer.id, "approved")}
                  title="Approve Answer"
                  description="Are you sure you want to approve this answer? It will be visible to all users."
                  confirmText="Approve"
                  variant="default"
                />

                {/* Answer Decline Modal */}
                <ConfirmationModal
                  isOpen={answerDeclineModalOpen === answer.id}
                  onClose={() => setAnswerDeclineModalOpen(null)}
                  onConfirm={() => handleAnswerStatusChange(answer.id, "rejected")}
                  title="Decline Answer"
                  description="Are you sure you want to decline this answer? It will be hidden from users."
                  confirmText="Decline"
                  variant="destructive"
                />

                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300">{answer.content}</p>
                    </div>
                    <div className="md:w-48 space-y-2 flex flex-col items-start md:items-end">
                      <div className="text-sm text-gray-500">
                        Answered by <span className="font-medium">{answer.username}</span>
                      </div>
                      <div className="text-sm text-gray-500">{formatDistanceToNow(new Date(answer.createdAt))} ago</div>
                      {getStatusBadge(answerStatuses[answer.id])}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-muted/50 flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setAnswerDeclineModalOpen(answer.id)}
                    disabled={answerStatuses[answer.id] === "rejected"}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Decline
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-500 border-green-200 hover:bg-green-50 hover:text-green-600"
                    onClick={() => setAnswerApproveModalOpen(answer.id)}
                    disabled={answerStatuses[answer.id] === "approved"}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

