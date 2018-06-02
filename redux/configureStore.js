import { combineReducers, applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import user from './modules/user';

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(persistConfig, {
  user
});

const configuerStore = () => {
  const store = createStore(reducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configuerStore;