import { TYPES } from '../types/typesReducer';

// La parte del dispatch y getState la hace Thunk 
export const mountQuestionByIndex = index => ( dispatch, getState ) => {
  const { questionsReducer, userReducer } = getState();
  if ( userReducer.id ) {
    dispatch(questionSelectAction(questionsReducer[index]))
  };
};

/*Para hacer el test se necesita questionsReducer y userReducer, éstos se deben setear o inicializar
 */

export const questionSelectAction=(payload)=>({
  type: TYPES.ANSWER_SELECT.MOUNT,
  payload
});

