import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAIL,
  ADD_CAR,
  DELETE_CAR,
  FILTER_CAR,
  SORT_CAR_BY_YEAR,
  SORT_CAR_BY_PRICE,
} from './constants.js';

export const dataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};

export const dataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data,
  };
};

export const dataFail = (error) => {
  return {
    type: DATA_FAIL,
    payload: error,
  };
};

export const addCar = (data) => {
  return {
    type: ADD_CAR,
    payload: data,
  };
};

export const deleteCar = (data) => {
  return {
    type: DELETE_CAR,
    payload: data,
  };
};

export const filterCarByPrice = (data) => {
  return {
    type: FILTER_CAR,
    payload: data,
  };
};

export const sortCarByYear = (data) => {
  return {
    type: SORT_CAR_BY_YEAR,
    payload: data,
  };
};

export const sortCarByPrice = (data) => {
  return {
    type: SORT_CAR_BY_PRICE,
    payload: data,
  };
};


