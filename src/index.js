import React from 'react';
import ReactDOM from 'react-dom';
import dataReducer from './components/table-wrapper/reducer';
import { getDataAboutCars } from './components/table-wrapper/sagas';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  dataReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(getDataAboutCars);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
