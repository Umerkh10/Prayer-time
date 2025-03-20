import axios from "axios";

const BASE_URL = process.env.API_BASE_URL!;

// const TOKEN =
//   "347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67";

export const signUp = async (userDetails: any) => {
    const { fullname, email, password } = userDetails;

    try {
        const response = await axios.post('http://localhost:3000/api/signup', {
            fullname,
            email,
            password,
        });

        return response; // Corrected
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'An error occurred during sign-up');
        } else {
            console.error('Unexpected Error:', error);
            throw new Error('Something went wrong');
        }
    }
};

export const login = async (userDetails: any) => {
    const { email, password } = userDetails;

    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            email,
            password,
        });

   
        return response // Corrected
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'An error occurred during sign-up');
        } else {
            console.error('Unexpected Error:', error);
            throw new Error('Something went wrong');
        }
    }
};

export const verifyEmail = async (email: any) => {

    try {
        const response = await axios.post('http://localhost:3000/api/verify-email', {
            email,
        });


        return response; // Corrected
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'An error occurred during sign-up');
        } else {
            console.error('Unexpected Error:', error);
            throw new Error('Something went wrong');
        }
    }
};

export const verifyCode = async (userDetails: any) => {
    const { email, code } = userDetails;

    try {
        const response = await axios.post('http://localhost:3000/api/verify-code', {
            email,
            code,
        });

        return response; // Corrected
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'An error occurred during sign-up');
        } else {
            console.error('Unexpected Error:', error);
            throw new Error('Something went wrong');
        }
    }
};

export const updateUserDetails = async (userDetails: any) => {
    const { id, fullname, email, password } = userDetails;

    try {
        const response = await axios.put('http://localhost:3000/api/user-details', {
            id,
            fullname,
            email,
            password,
        });

        console.log(response);
        return response.data; // Corrected
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'An error occurred during sign-up');
        } else {
            console.error('Unexpected Error:', error);
            throw new Error('Something went wrong');
        }
    }
};