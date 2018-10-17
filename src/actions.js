import magicBallService from "./services/magicService";

export const addQuestion = (question) => {
    const answer = magicBallService(question);  
    return {
        type: 'ADD_QUESTION',
        answer
    }
};

export const updateQuestion = (question) => ({
    type: 'UPDATE_QUESTION',
    question
})