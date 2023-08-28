import axios from "axios";
import { put, take, takeEvery } from "redux-saga/effects";

import {
  GET_ALL_USERS,
  DELETE_USER,
  FETCH_USERS_SUCCESS,
  DELETE_SUCESSS,
} from "../redux/actions";

const serverURL = "http://localhost:3000/users";

function* getAllUsers(action) {
  try {
    const response = yield axios.get(serverURL);
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
}
