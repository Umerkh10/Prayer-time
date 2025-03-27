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
        error.response?.data?.message || "An error occurred during sign-up"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};
