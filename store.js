import { createStore } from 'redux';
import AppReducer from './src/reduces'

const store = createStore(AppReducer);

export default store;