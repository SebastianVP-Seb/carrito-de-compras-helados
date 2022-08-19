import { TYPES } from "../types/typesReducer";

export const saveAnswer = (questionId, isCorrect, answerSelect, responseTime, point) => {
  return ( dispatch ) => {
    dispatch(addAnswer(questionId, isCorrect, answerSelect, responseTime, point));
  }
}

export const addAnswer = (
  questionId,
  isCorrect,
  answerSelect,
  responseTime,
  point
) => {
  return {
    type: TYPES.ANSWERS.ADD,
    payload: {
      questionId,
      isCorrect,
      answerSelect,
      responseTime,
      point
    }
  }
}