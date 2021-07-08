import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReduser from './phonebook/phonebook-reduser';

const rootReduser = combineReducers({
  contacts: phonebookReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
