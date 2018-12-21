/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 14:50:29
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-21 16:46:19
 * @Description: 浏览器端源文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Home from '../container/home';
import Routes from '../Router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const reducer = (state = { name: 'jack1', age: '16', love: '1ooxx' }, action) => {
	return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>{Routes}</BrowserRouter>
		</Provider>
	);
};
//同构  服务端渲染一次  客户端再渲染一次
ReactDOM.hydrate(<App />, document.getElementById('root'));
