import { createStore  /* , applyMiddleware */} from "redux";
import rootReducer from "./reducers";
//import thunk from "redux-thunk";
//import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* rootReducer, composeWithDevTools(applyMiddleware(thunk)) */
  );

export default store;
