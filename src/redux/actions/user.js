import axios from "axios";
import Swal from "sweetalert2";
import * as types from "../actionTypes/actionTypes";
import { errorHandler, loaderHandler, successHandler } from "./status";
const config = require("../../data/config.json");

//create user
export const createUser = (data) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.post(`${config.URL}/api/user/create`, data);
    if (result.status === 200) {
      dispatch(successHandler(result.data.msg));
    }
  } catch (error) {
    const msg = error.response.data.msg
      ? error.response.data.msg
      : error.message;
    dispatch(errorHandler(msg));
  }
};
//get users
export const getUsers = () => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.get(`${config.URL}/api/users`);

    if (result.status === 200) {
      dispatch(successHandler(null));
      dispatch({ type: types.GET_USERS, payload: result.data });
    }
  } catch (error) {
    const msg = !error.message ? error.response.data.msg : error.message;

    dispatch(errorHandler(msg));
  }
};

//get sigle users
export const getSingleUser = (id) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.get(`${config.URL}/api/user/${id}`);
    if (result.status === 200) {
      dispatch(successHandler(null));
      dispatch({ type: types.GET_USER, payload: result.data });
    }
  } catch (error) {
    const msg = !error.message ? error.response.data.msg : error.message;

    dispatch(errorHandler(msg));
  }
};

//delete user
export const deleteUser = (id) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.delete(`${config.URL}/api/user/delete/${id}`);
    if (result.status === 200) {
      dispatch(successHandler(null));
      Swal.fire({
        position: "center",
        icon: "success",
        title: result.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(getUsers());
    }
  } catch (error) {
    const msg = !error.message ? error.response.data.msg : error.message;

    dispatch(errorHandler(msg));
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
//delete user
export const updateUser = (id, data) => async (dispatch) => {
  dispatch(loaderHandler());
  try {
    const result = await axios.put(`${config.URL}/api/user/edit/${id}`, data);
    if (result.status === 200) {
      dispatch(successHandler(null));
      Swal.fire({
        position: "center",
        icon: "success",
        title: result.data.msg,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(getUsers());
    }
  } catch (error) {
    const msg = !error.message ? error.response.data.msg : error.message;

    dispatch(errorHandler(msg));
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.msg,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
