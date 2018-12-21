import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
const reducer = (state = { name: 'jack1', age: '16', love: '1ooxx' }, action) => {
	return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
