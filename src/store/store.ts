import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import generalReducer from 'store/reducers/generalReducer';

const persistConfig = {
    key: 'root',
    storage,
  };

export const store = configureStore({
    reducer: persistReducer(
        persistConfig,
        combineReducers({
          general: generalReducer,
        }),
      ),
})

export const persistor = persistStore(store);