import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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

import authReducer from './authSlice';
import communityReducer from '../dashboard-containers/broker-profile/community/CommunitySlice';
import loginReducer from '../features/auth/login/loginSlice';
import modalsReducer from './ModalsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  community: communityReducer,
  login: loginReducer,
  modals: modalsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
