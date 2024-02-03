import { createStore } from 'redux';
import gameReducer from './reducers/game';

const store = createStore(gameReducer);

export default store;
