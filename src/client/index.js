/*
 * @Author      : Jerrychan
 * @Date        : 2018-12-20 14: 50: 29
 * @LastEditors : Jerrychan
 * @LastEditTime: 2018-12-24 16: 57: 38
 * @Description : 浏览器端源文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from '../container/home';
import routes from '../Router';
import { Provider } from 'react-redux';
import getStore from '../store';

const App = () => {
	return (
		<Provider store={getStore()}>
			<BrowserRouter>
				<div>
					{routes.map(route => {
						<Route {...route} />;
					})}
				</div>
			</BrowserRouter>
		</Provider>
	);
};
//同构  服务端渲染一次  客户端再渲染一次
ReactDOM.hydrate(<App />, document.getElementById('root'));
