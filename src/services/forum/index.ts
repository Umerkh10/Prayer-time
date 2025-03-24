import axios from "axios";
import { BASE_URL } from "..";

// const TOKEN =
//   "347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67";

export const getAllQuestions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-all-questions`);

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const getQuestionByTitle = async (title: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-question-by-title`, {
      params: { title },
    });

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error(error.message);
    }
  }
};

export const addQuestion = async (questionDetail: any) => {
  const { user_id, title, description } = questionDetail;

  // console.log("questionDetail", user_id);

  try {
    const response = await axios.post(`${BASE_URL}/add-question`, {
      user_id: user_id,
      title,
      description,
    });

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const addAnswer = async (answerDetail: any) => {
  const { userId, questionId, answer } = answerDetail;
  

  try {
    const response = await axios.post(`${BASE_URL}/add-answer`, {
      user_id: userId,
      question_id: questionId,
      answer,
    });

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const deleteQuestion = async (id: any) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/delete-question-by-id`,
      id
    );

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const deleteAnswer = async (id: any) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete-answer-by-id`, id);

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const updateQuestionStatus = async (id: number, status: string) => {
  try {
    const response = await axios.patch(`${BASE_URL}/update-question-status`, {
      id,
      status,
    });

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const updateAnswerStatus = async (id: number, status: string) => {

  try {
    const response = await axios.patch(`${BASE_URL}/update-answer-status`, {
      id,
      status,
    });

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};
