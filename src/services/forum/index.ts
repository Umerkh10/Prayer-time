import axios from "axios";

const BASE_URL = process.env.API_BASE_URL!;

// const TOKEN =
//   "347f7627d6c4765cf911391a34a3319e2140859fbc723ebefeb4f2f39d8a1d67";

export const getAllQuestions = async () => {

    try {
        const response = await axios.get('http://localhost:3000/api/get-all-questions');

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




export const getTitle = async (title: any) => {


    try {
        const response = await axios.get('http://localhost:3000/api/get-question-by-title', title);

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

export const addQuestion = async (questionDetail: any) => {

    const {user_id,title,description} = questionDetail

    // console.log("questionDetail", user_id);
    
    
    try {
        const response = await axios.post('http://localhost:3000/api/add-question',{
            user_id:36,
            title,
            description
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

export const addAnswer = async (answerDetail: any) => {

    const {user_id,question_id,answer} = answerDetail
    
    try {
        const response = await axios.post('http://localhost:3000/api/add-answer',{
            user_id,
            question_id,
            answer
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





export const deleteQuestion = async (id: any) => {


    try {
        const response = await axios.delete('http://localhost:3000/api/delete-question-by-id', id);

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




export const deleteAnswer = async (id: any) => {


    try {
        const response = await axios.delete('http://localhost:3000/api/delete-answer-by-id', id);

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




export const updateQuestion = async (editQuestion: any) => {

    const {id,status} = editQuestion
    
    try {
        const response = await axios.patch('http://localhost:3000/api/update-question-status',{
            id,
            status,
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





export const updateAnswer = async (editAnswer: any) => {

    const {id,status} = editAnswer
    
    try {
        const response = await axios.patch('http://localhost:3000/api/update-answer-status',{
            id,
            status,
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