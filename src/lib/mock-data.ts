// Mock data for the forum

export const mockQuestions = [
    {
      id: 1,
      slug: "how-to-use-react-hooks",
      title: "How to use React Hooks effectively?",
      content:
        "I'm new to React Hooks and I'm trying to understand the best practices. When should I use useState vs useReducer? How do I properly use useEffect to avoid infinite loops? Any tips or resources would be greatly appreciated.",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SJ",
      },
      date: "March 15, 2023",
      likes: 24,
      answers: 8,
    },
    {
      id: 2,
      slug: "nextjs-vs-gatsby",
      title: "Next.js vs Gatsby: Which one should I choose for my project?",
      content:
        "I'm starting a new project and I'm trying to decide between Next.js and Gatsby. My project is a blog with some e-commerce functionality. I need good SEO and performance. What are the pros and cons of each for my use case?",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      date: "March 12, 2023",
      likes: 32,
      answers: 15,
    },
    {
      id: 3,
      slug: "tailwind-vs-styled-components",
      title: "Tailwind CSS vs. styled-components: Which is better for large projects?",
      content:
        "I'm working on a large enterprise application and I'm trying to decide on a styling approach. I've used both Tailwind CSS and styled-components in smaller projects, but I'm not sure which would scale better for a large team. What are your experiences with either in large codebases?",
      author: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AR",
      },
      date: "March 10, 2023",
      likes: 18,
      answers: 12,
    },
    {
      id: 4,
      slug: "typescript-best-practices",
      title: "TypeScript best practices for React applications",
      content:
        "I've been using TypeScript with React for a while now, but I feel like I'm not using it to its full potential. What are some best practices for typing props, state, and event handlers? How do you handle complex types and generics in React components?",
      author: {
        name: "Emily Wong",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EW",
      },
      date: "March 8, 2023",
      likes: 45,
      answers: 20,
    },
    {
      id: 5,
      slug: "state-management-2023",
      title: "State management in 2023: What are you using?",
      content:
        "With so many options for state management in React (Context API, Redux, Zustand, Jotai, Recoil, etc.), I'm curious what people are using in 2023. What's your go-to solution and why? Has anyone moved away from Redux to something simpler?",
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DK",
      },
      date: "March 5, 2023",
      likes: 56,
      answers: 28,
    },
    {
      id: 6,
      slug: "optimizing-react-performance",
      title: "Optimizing React performance: Tips and tricks",
      content:
        "My React application is getting slow as it grows. What are some effective ways to optimize performance? I've tried using React.memo and useMemo, but I'm not seeing significant improvements. Are there any tools or techniques you recommend for identifying performance bottlenecks?",
      author: {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JL",
      },
      date: "March 3, 2023",
      likes: 38,
      answers: 16,
    },
    {
      id: 7,
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs Flexbox: When to use which?",
      content:
        "I'm trying to improve my CSS layout skills and I'm confused about when to use CSS Grid versus Flexbox. Are there specific use cases where one is clearly better than the other? Can they be used together effectively?",
      author: {
        name: "Ryan Patel",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "RP",
      },
      date: "February 28, 2023",
      likes: 29,
      answers: 14,
    },
    {
      id: 8,
      slug: "testing-react-components",
      title: "Testing React components: Jest, React Testing Library, or Cypress?",
      content:
        "I want to improve the test coverage of my React application. What testing libraries and approaches do you recommend? Should I focus on unit tests with Jest and React Testing Library, or end-to-end tests with Cypress? How do you balance different types of tests?",
      author: {
        name: "Sophia Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SM",
      },
      date: "February 25, 2023",
      likes: 33,
      answers: 19,
    },
    {
      id: 9,
      slug: "graphql-vs-rest",
      title: "GraphQL vs REST: Is it worth switching?",
      content:
        "My team is considering switching from REST APIs to GraphQL. I'd like to hear from people who have made this transition. What were the benefits and challenges? Was it worth the effort? Are there specific use cases where GraphQL really shines?",
      author: {
        name: "Thomas Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "TW",
      },
      date: "February 22, 2023",
      likes: 27,
      answers: 13,
    },
    {
      id: 10,
      slug: "web-accessibility-tips",
      title: "Web accessibility tips for React developers",
      content:
        "I want to make my React applications more accessible, but I'm not sure where to start. What are some practical tips and best practices for improving accessibility? Are there specific React libraries or tools that can help with this?",
      author: {
        name: "Olivia Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "OB",
      },
      date: "February 20, 2023",
      likes: 41,
      answers: 22,
    },
    {
      id: 11,
      slug: "docker-for-frontend",
      title: "Using Docker for frontend development: Is it worth it?",
      content:
        "I've been hearing a lot about using Docker for frontend development, but I'm not sure if it's worth the setup time. Has anyone integrated Docker into their React/Next.js workflow? What are the benefits and drawbacks?",
      author: {
        name: "James Taylor",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JT",
      },
      date: "February 18, 2023",
      likes: 22,
      answers: 9,
    },
    {
      id: 12,
      slug: "monorepo-vs-multiple-repos",
      title: "Monorepo vs multiple repositories: Which approach is better?",
      content:
        "Our team is debating whether to use a monorepo or multiple repositories for our microservices architecture. We have several frontend applications and backend services. What are the pros and cons of each approach? Which tools work best for monorepos?",
      author: {
        name: "Natalie Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "NG",
      },
      date: "February 15, 2023",
      likes: 36,
      answers: 17,
    },
  ]
  
  export const mockAnswers = [
    {
      id: 1,
      questionId: 1,
      content:
        "React Hooks are definitely a game-changer! For useState vs useReducer, I generally use useState for simple state and useReducer when state logic becomes complex or when the next state depends on the previous one. For useEffect, always make sure to include all dependencies in the dependency array. If you're using values from props or state in your effect, they should be in that array. To avoid infinite loops, make sure you're not updating state unconditionally in an effect without dependencies. Check out the React docs on this topic, they're really helpful!",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MC",
      },
      date: "March 15, 2023",
      likes: 12,
    },
    {
      id: 2,
      questionId: 1,
      content:
        "One tip that helped me a lot with useEffect is to think about it in terms of synchronization rather than lifecycle events. Instead of thinking 'I want to run this code when the component mounts', think 'I want to keep this data in sync with this dependency'. Also, consider extracting complex logic into custom hooks for better reusability and testing.",
      author: {
        name: "Emily Wong",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EW",
      },
      date: "March 16, 2023",
      likes: 8,
    },
    {
      id: 3,
      questionId: 2,
      content:
        "I've used both Next.js and Gatsby extensively. For your use case (blog with e-commerce), I'd lean towards Next.js. It gives you more flexibility with its API routes for the e-commerce functionality, while still providing excellent static generation for your blog content. Gatsby is great for purely static sites, but Next.js handles the hybrid static/dynamic case better in my experience. Next.js also has better incremental adoption and a more intuitive routing system.",
      author: {
        name: "Alex Rivera",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AR",
      },
      date: "March 12, 2023",
      likes: 15,
    },
    {
      id: 4,
      questionId: 2,
      content:
        "Another consideration is the ecosystem. Next.js is developed by Vercel and has excellent deployment options there, while Gatsby has its own cloud platform. Next.js tends to follow React patterns more closely, which might make it easier if your team is already familiar with React. Both have good plugin ecosystems, but Gatsby's is more mature for content-focused sites. For SEO, both are excellent when properly configured.",
      author: {
        name: "Sophia Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SM",
      },
      date: "March 13, 2023",
      likes: 10,
    },
    {
      id: 5,
      questionId: 3,
      content:
        "For large projects with multiple developers, I've found Tailwind CSS to be more maintainable. It enforces a consistent design system through its configuration, which helps keep everyone on the same page. The utility-first approach means you're not constantly creating and naming new components for small style variations. The learning curve is steeper initially, but once your team knows the utility classes, development speed increases significantly. The bundle size is also well-optimized with PurgeCSS.",
      author: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DK",
      },
      date: "March 10, 2023",
      likes: 9,
    },
  ]
  
  