/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 14:50:29
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-20 15:04:16
 * @Description: 浏览器端源文件
 */
console.log('12312312312312');

import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../container/home';

//同构  服务端渲染一次  客户端再渲染一次
ReactDOM.hydrate(<Home />, document.getElementById('root'));
