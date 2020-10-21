import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from './constants.js';

const initialState = {
  isLoading: false,
  carsData: [],
};

function dataReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case DATA_SUCCESS:
      return {
        ...state,
        carsData: payload,
        isLoading: false,
      };

    case DATA_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default dataReducer;
