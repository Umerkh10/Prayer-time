"use client";

import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ConfirmationModal } from "./confirmation-modal";
import { formatDistanceToNow } from "@/lib/formatDate";
import { refactorDate } from "@/lib/date";
import {
  getQuestionByTitle,
  updateAnswerStatus,
  updateQuestionStatus,
} from "@/services/forum";
import { toast } from "sonner";

interface Question {
  id: number;
  title: string;
  content: string;
  status: string;
  username: string;
  createdAt: string;
}

interface Answer {
  id: number;
  content: string;
  username: string;
  status: string;
  createdAt: string;
}

export function QuestionDetail({ question, answers }: any) {
  const [questionStatus, setQuestionStatus] = useState(question?.status);

  const [answerStatuses, setAnswerStatuses] = useState<Record<number, string>>(
    question.answers.reduce(
      (acc: any, answer: any) => ({ ...acc, [answer.id]: answer.status }),
      {}
    )
  );

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal states
  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const [declineModalOpen, setDeclineModalOpen] = useState(false);
  const [answerApproveModalOpen, setAnswerApproveModalOpen] = useState<
    number | null
  >(null);
  const [answerDeclineModalOpen, setAnswerDeclineModalOpen] = useState<
    number | null
  >(null);

  const handleQuestionApprove = async (id: number) => {
    setIsSubmitting(true);
    try {
      const response = await updateQuestionStatus(id, "approved");

      if (response.status === 200) {
        console.log("response", setQuestionStatus);
        setQuestionStatus(response.data.updatedQuestion.status);
        toast.success(response.data.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
      setApproveModalOpen(false);
    }
  };

  const handleQuestionReject = async (id: any) => {
    setIsSubmitting(true);
    try {
      const response = await updateQuestionStatus(id, "declined");

      if (response.status === 200) {
        // setQuestionStatus("approved");
        toast.success(response.data.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
      setApproveModalOpen(false);
    }
    // setQuestionStatus("rejected");
  };

  const handleAnswerStatusChange = async (answerId: number, status: string) => {
    setIsSubmitting(true);
    try {
      const response = await updateAnswerStatus(answerId, status);

      if (response.status === 200) {
        console.log("response", setQuestionStatus);
        setAnswerStatuses((prev) => ({ ...prev, [answerId]: status }));
        toast.success(response.data.message);
        // setAnswerApproveModalOpen(false)
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
      setApproveModalOpen(false);
    }
  };

  const getStatusBadge = (status: string) => {
    console.log("status", status);
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500 text-white">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500 text-white">Rejected</Badge>;
      default:
        return (
          <Badge className="bg-gray-500 hover:bg-gray-500 text-white">
            {status?.toUpperCase()}
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-8 ">
      {/* Question Approve Modal */}
      <ConfirmationModal
        isOpen={approveModalOpen}
        onClose={() => setApproveModalOpen(false)}
        onConfirm={() => handleQuestionApprove(question?.id)}
        title="Approve Question"
        description="Are you sure you want to approve this question? It will be visible to all users."
        confirmText="Approve"
        variant="default"
        isSubmitting={isSubmitting}
      />

      {/* Question Decline Modal */}
      <ConfirmationModal
        isSubmitting={isSubmitting}
        isOpen={declineModalOpen}
        onClose={() => setDeclineModalOpen(false)}
        onConfirm={() => handleQuestionReject(question?.id)}
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
              <p className="text-gray-700 dark:text-gray-300">
                {question.description}
              </p>
            </div>
            <div className="md:w-48 space-y-2 flex flex-col items-start md:items-end">
              <div className="text-sm text-gray-500">
                Posted by{" "}
                <span className="font-medium">{question.user.fullname}</span>
              </div>
              <div className="text-sm text-gray-500">
                {refactorDate(question.created_at)}
              </div>
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
            disabled={questionStatus === "declined"}
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
            {question?.answers.map((answer: any) => (
              <Card key={answer.id}>
                {/* Answer Approve Modal */}
                <ConfirmationModal
                  isSubmitting={isSubmitting}
                  isOpen={answerApproveModalOpen === answer.id}
                  onClose={() => setAnswerApproveModalOpen(null)}
                  onConfirm={() =>
                    handleAnswerStatusChange(answer.id, "approved")
                  }
                  title="Approve Answer"
                  description="Are you sure you want to approve this answer? It will be visible to all users."
                  confirmText="Approve"
                  variant="default"
                />

                {/* Answer Decline Modal */}
                <ConfirmationModal
                  isSubmitting={isSubmitting}
                  isOpen={answerDeclineModalOpen === answer.id}
                  onClose={() => setAnswerDeclineModalOpen(null)}
                  onConfirm={() =>
                    handleAnswerStatusChange(answer.id, "rejected")
                  }
                  title="Decline Answer"
                  description="Are you sure you want to decline this answer? It will be hidden from users."
                  confirmText="Decline"
                  variant="destructive"
                />

                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300">
                        {answer?.answer}
                      </p>
                    </div>
                    <div className="md:w-48 space-y-2 flex flex-col items-start md:items-end">
                      <div className="text-sm text-gray-500">
                        Answered by{" "}
                        <span className="font-medium">
                          {answer?.user?.fullname}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {refactorDate(answer?.created_at)}
                      </div>
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
  );
}
