import axios from "axios";
import { put, take, takeEvery } from "redux-saga/effects";
import Swal from "sweetalert2";

import {
  GET_ALL_USERS,
  DELETE_USER,
  FETCH_USERS_SUCCESS,
  DELETE_SUCCESS,
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

function* deleteUser(action) {
  try {
    const userId = action.payload;
    const response = yield axios.delete(`${serverURL}/${userId}`);
    console.log(response);
    if (response.status === 200) {
      Swal.fire({
        title: "Delete successfully the userId " + userId,
        timer: 1500,
        icon: "success",
      });
    }
    yield put({
      type: DELETE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_ALL_USERS, getAllUsers);
  yield takeEvery(DELETE_USER, deleteUser);
}
