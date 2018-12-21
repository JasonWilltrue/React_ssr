/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 14:50:29
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-21 16:10:39
 * @Description: 浏览器端源文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Home from '../container/home';
import Routes from '../Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = { name: 'jack', age: '13', love: 'ooxx' }, action) => {
	return state;
};

const store = createStore(reducer);

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>{Routes}</BrowserRouter>
		</Provider>
	);
};
//同构  服务端渲染一次  客户端再渲染一次
ReactDOM.hydrate(<App />, document.getElementById('root'));
