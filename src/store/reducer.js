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

    case ADD_CAR:
      return {
        ...state,
        carsData: [...payload],
      };

    case DELETE_CAR:
      return {
        ...state,
        carsData: [...payload],
      };

    case FILTER_CAR:
      return {
        ...state,
        carsData: [...payload],
      };

      case SORT_CAR_BY_YEAR:
      return {
        ...state,
        carsData: [...payload],
      }; 
    
      case SORT_CAR_BY_PRICE:
        return {
          ...state,
          carsData: [...payload],
        }; 

    
    default:
      return state;
  }
}

export default dataReducer;
