import { TYPES } from "../types/typesReducer"
import { mountQuestionByIndex } from "./questionSelectActtion"
import { addTotalQuestionsAction } from "./score.actions"
import axios from 'axios';

export const getQuestions = () => dispatch => {

  const URL = process.env.HOST_BACKEND;
  console.log('1.- Entra la acción');

  return axios.get(`${URL}/api/questions`)
    // .then(resolve => resolve.json()) sin axios
    .then(({ data: {data} }) => {
      console.log('2.- Obteniéndose datos')
      dispatch(setQuestionsAction(data));
      dispatch(addTotalQuestionsAction(data.length));
      dispatch(mountQuestionByIndex(0));
    })
    .catch(err=>{throw new Error(err)});
}

// Signature for Reducer
export const setQuestionsAction = (questions) => ({
  type: TYPES.QUESTIONS.ADD,
  payload: questions
})
