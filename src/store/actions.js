import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL, ADD_CAR, DELETE_CAR } from './constants.js';

export const dataRequest = () => { 
  return {
    type: DATA_REQUEST
  }
};

export const dataSuccess = (data) => {
  return {
    type: DATA_SUCCESS,
    payload: data,
  };
}

export const dataFail = (error) => {
  return {
    type: DATA_FAIL,
    payload: error,
  };
}

export const addCar = (data) => {
  return {
    type: ADD_CAR,
    payload: data,
  };
}

export const deleteCar = (data) => {
  return {
    type: DELETE_CAR,
    payload: data,
  };
}



