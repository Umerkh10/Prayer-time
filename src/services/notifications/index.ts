import axios from "axios";
import { BASE_URL } from "..";

export const getUserNotifications = async (userId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-user-notifications`, {
      params: { userId },
    });

    return response; // Corrected
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred during fetching notification"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const deleteNotifications = async (id: any) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete-notification`, {
      data: { id },
    });

    return response;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred during deleting notification"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const deleteAllNotifications = async (user_id: any) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/delete-all-notifications`,
      {
        data: { user_id },
      }
    );

    return response;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred during deleting notification"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};
