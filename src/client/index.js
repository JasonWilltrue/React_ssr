/*
 * @Author: Jerrychan
 * @Date: 2018-12-20 14:50:29
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-12-20 15:04:16
 * @Description: 浏览器端源文件
 */

import React from 'react';
import ReactDom from 'react-dom';

import Home from '../container/home/index';

ReactDom.hydrate(<Home />, document.getElementById('root'));
