import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from './constants.js';

export function dataRequest() {
  return {
    type: DATA_REQUEST,
  };
}

export function dataSuccess(data) {
  return {
    type: DATA_SUCCESS,
    payload: data,

  };
}

export function dataFail(error) {
  return {
    type: DATA_FAIL,
    payload: error,
  };
}
