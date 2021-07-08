import { combineReducers } from 'redux';
import types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    default:
      return state;
  }
};

const filter = (state = '', actiom) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
