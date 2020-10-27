/* eslint-disable import/extensions */
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

export const dataRequest = () => ({
  type: DATA_REQUEST,
});

export const dataSuccess = data => ({
  type: DATA_SUCCESS,
  payload: data,
});

export const dataFail = error => ({
  type: DATA_FAIL,
  payload: error,
});

export const addCar = data => ({
  type: ADD_CAR,
  payload: data,
});

export const deleteCar = data => ({
  type: DELETE_CAR,
  payload: data,
});

export const filterCarByPrice = data => ({
  type: FILTER_CAR,
  payload: data,
});

export const sortCarByYear = data => ({
  type: SORT_CAR_BY_YEAR,
  payload: data,
});

export const sortCarByPrice = data => ({
  type: SORT_CAR_BY_PRICE,
  payload: data,
});
