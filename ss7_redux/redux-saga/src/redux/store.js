// Redux
import { createStore, applyMiddleware } from "redux";

// Using middleware using redux saga
import createSagaMiddleware from "redux-saga";

// Specific saga to handle a specific action
import rootSaga from "../saga/userSaga";

// Reducer to receive action from dispatch
import rootReducer from "./reducers";

// create a redux middleware

const sagaMiddleware = createSagaMiddleware();

// create a redux store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run saga middleware to apply all effects
sagaMiddleware.run(rootSaga);

export default store;
