import React from "react";
import QuestionPage from "./single-question";
import { getQuestionByTitle } from "@/services/forum";

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const title = params?.title as string;

  const metaslug = title
    ?.split("-")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  try {
    const response = await getQuestionByTitle(title);

    if (response.status === 200) {
      const question = response.data;

      return {
        title: `${question?.title} – Global Salah Forum Discussion`,
      description: `${question?.description} in the Global Salah Forum. Share your insights, ask follow-up questions, and connect with the community.`,
        alternates: {
          canonical: `https://www.globalsalah.com/${lang}/forum/${title}`,
        },
        robots: {
          index: true,
          follow: true,
          nocache: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
      };
    }
  } catch (error) {
    return {
      title: "Forum Question",
      description: "Find answers to your questions.",
    };
  }
}

function page() {
  return (
    <div>
      <QuestionPage />
    </div>
  );
}

export default page;
