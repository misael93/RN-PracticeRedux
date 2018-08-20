import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import reducers from '../src/reducers/index';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'myKey',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);