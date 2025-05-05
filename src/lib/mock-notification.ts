// Mock data for notifications

export type NotificationType = "answer" | "mention" | "like" | "follow" | "system" | "question_approved"

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  link?: string
  is_read: boolean
  createdAt: string
  sender?: {
    name: string
    avatar: string
    initials: string
  }
}


