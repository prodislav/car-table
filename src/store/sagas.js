/* eslint-disable import/extensions */
import { put, call, takeEvery } from 'redux-saga/effects';
import { DATA_REQUEST } from './constants.js';
import { dataSuccess, dataFail } from './actions';
import dataAboutCars from '../data';

function* fetchDataAsync() {
  try {
    const data = yield call(() => new Promise(res => setTimeout(() => res(dataAboutCars), 2000))
      .then(res => res));
    yield put(dataSuccess(data));
  } catch (error) {
    yield put(dataFail());
  }
}
fetchDataAsync();

export function* getDataAboutCars() {
  yield takeEvery(DATA_REQUEST, fetchDataAsync);
}
