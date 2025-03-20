// Mock data for notifications

export type NotificationType = "answer" | "mention" | "like" | "follow" | "system" | "question_approved"

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  link?: string
  read: boolean
  createdAt: string
  sender?: {
    name: string
    avatar: string
    initials: string
  }
}

export const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "answer",
    title: "New Answer",
    message: "Michael Chen answered your question about React Hooks.",
    link: "/forum/how-to-use-react-hooks",
    read: false,
    createdAt: "2023-03-18T10:30:00Z",
    sender: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
  },
  {
    id: "2",
    type: "mention",
    title: "Mentioned You",
    message: 'Emily Wong mentioned you in a comment on "TypeScript best practices".',
    link: "/forum/typescript-best-practices",
    read: false,
    createdAt: "2023-03-17T15:45:00Z",
    sender: {
      name: "Emily Wong",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
    },
  },
  {
    id: "3",
    type: "like",
    title: "Liked Your Answer",
    message: 'Alex Rivera liked your answer to "Next.js vs Gatsby".',
    link: "/forum/nextjs-vs-gatsby",
    read: false,
    createdAt: "2023-03-16T09:20:00Z",
    sender: {
      name: "Alex Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AR",
    },
  },
  {
    id: "4",
    type: "question_approved",
    title: "Question Approved",
    message: 'Your question "How to implement authentication in Next.js?" has been approved and is now live.',
    link: "/forum/how-to-implement-authentication-in-nextjs",
    read: true,
    createdAt: "2023-03-15T14:10:00Z",
  },
  {
    id: "5",
    type: "follow",
    title: "New Follower",
    message: "David Kim started following you.",
    link: "/profile/david-kim",
    read: true,
    createdAt: "2023-03-14T11:05:00Z",
    sender: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
    },
  },
  {
    id: "6",
    type: "system",
    title: "Welcome to Developer Forum",
    message: "Welcome to our community! Start by exploring questions or ask your own.",
    read: true,
    createdAt: "2023-03-10T08:00:00Z",
  },
  {
    id: "7",
    type: "answer",
    title: "New Answer",
    message: "Jessica Lee answered your question about optimizing React performance.",
    link: "/forum/optimizing-react-performance",
    read: true,
    createdAt: "2023-03-08T16:30:00Z",
    sender: {
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JL",
    },
  },
  {
    id: "8",
    type: "like",
    title: "Liked Your Question",
    message: "Ryan Patel and 5 others liked your question about CSS Grid vs Flexbox.",
    link: "/forum/css-grid-vs-flexbox",
    read: true,
    createdAt: "2023-03-05T13:15:00Z",
    sender: {
      name: "Ryan Patel",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "RP",
    },
  },
  {
    id: "9",
    type: "mention",
    title: "Mentioned You",
    message: 'Sophia Martinez mentioned you in a comment on "Testing React components".',
    link: "/forum/testing-react-components",
    read: true,
    createdAt: "2023-03-02T10:45:00Z",
    sender: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SM",
    },
  },
  {
    id: "10",
    type: "system",
    title: "Badge Earned",
    message: 'Congratulations! You\'ve earned the "Helpful" badge for your contributions.',
    read: true,
    createdAt: "2023-02-28T09:30:00Z",
  },
]

