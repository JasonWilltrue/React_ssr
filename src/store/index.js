import { applyMiddleware, combineReducers } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../container/home/store';

const reducer = combineReducers({
	home: homeReducer,
});

// const reducer = (state = { name: 'jack1', age: '16', love: '1ooxx' }, action) => {
// 	return state;
// };

const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
};

export default getStore;
