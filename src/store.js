
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import studentReducer from './redux/studentReducer';

const rootReducer = combineReducers({
  studentState: studentReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
