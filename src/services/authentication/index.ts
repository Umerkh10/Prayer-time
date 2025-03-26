import axios from "axios";
import { BASE_URL } from "..";

// const TOKEN =
//   "347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67";

export const signUp = async (userDetails: any) => {
  const { fullname, email, password } = userDetails;

  try {
    const response = await axios.post(`${BASE_URL}/signup`, {
      fullname,
      email,
      password,
    });

    return response;
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

export const login = async (userDetails: any) => {
  const { email, password } = userDetails;

  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });

    return response; // Corrected
  } catch (error) {
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

export const verifyEmail = async (email: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-email`, {
      email,
    });

    return response; // Corrected
  } catch (error) {
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

export const verifyCode = async (userDetails: any) => {
  const { email, code } = userDetails;

  try {
    const response = await axios.post(`${BASE_URL}/verify-code`, {
      email,
      code,
    });

    return response; // Corrected
  } catch (error) {
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

export const updateUserDetails = async (id: number, fullname: string) => {
  try {
    const response = await axios.put(`${BASE_URL}/user-details`, {
      id,
      fullname,
    });

    return response.data;
  } catch (error) {
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

export const updateUserAccountStatus = async (id: number, status: string) => {
  try {
    const response = await axios.patch(`${BASE_URL}/update-user-account-type`, {
      id,
      status,
    });

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred updating user account type"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const getUserById = async (id: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-user-by-id`, {
      params: { id },
    });
    return response.data; // Corrected
  } catch (error) {
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

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-all-users`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred during fetching users"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};

export const updateUserPassword = async (id: number, newPassword: string) => {
  try {
    const response = await axios.put(`${BASE_URL}/reset-password`, {
      id,
      newPassword,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message ||
          "An error occurred during updatin password"
      );
    } else {
      console.error("Unexpected Error:", error);
      throw new Error("Something went wrong");
    }
  }
};
