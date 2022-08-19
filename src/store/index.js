import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducers } from './rootReducer';

//el initialState se pasa para hacer los tests con el store
export const configureStore = (initialState) => {

  const isDevelopment = process.env.ENVIROMENT === 'development';

  const middleware = [thunk];
  const middlewareEnhacer = applyMiddleware(...middleware);
  const enhacers = [ middlewareEnhacer ];

  const composeEnchancers = isDevelopment ? composeWithDevTools(...enhacers) : compose(...enhacers);
  return createStore(rootReducers, initialState, composeEnchancers);
}

const store = configureStore();

export default store ;

