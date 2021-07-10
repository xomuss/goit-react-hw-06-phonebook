import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import phonebookReduser from './phonebook/phonebook-reduser';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReduser = combineReducers({
  contacts: persistReducer(contactsPersistConfig, phonebookReduser),
});

// const rootReduser = combineReducers({
//   contacts: phonebookReduser,
// });

// const store = createStore(rootReduser, composeWithDevTools());
console.log(getDefaultMiddleware());
console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: rootReduser,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

const persistor = persistStore(store);

export default { store, persistor };
