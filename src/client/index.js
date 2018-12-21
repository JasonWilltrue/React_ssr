/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 14:50:29
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-21 12:44:06
 * @Description: 浏览器端源文件
 */
console.log('12312312312312');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Home from '../container/home';
import Routes from '../Router';

const App = () => {
	return <BrowserRouter>{Routes}</BrowserRouter>;
};
//同构  服务端渲染一次  客户端再渲染一次
ReactDOM.hydrate(<App />, document.getElementById('root'));
