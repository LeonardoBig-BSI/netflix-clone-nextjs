import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER]
            },
        })
        .concat(sagaMiddleware)
});

export const persistor = persistStore(store);