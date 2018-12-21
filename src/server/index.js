// var express = require('express');
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server.js';
const app = express();
app.use(express.static('public')); //让浏览器识别静态文件
import { StaticRouter } from 'react-router-dom';
import Routes from '../Router';
// const content = renderToString(<Home />);

app.get('/', function(req, res) {
	/**
	 * StaticRouter 并不智能  要求浏览器端发送请求地址location  根据地址判断请求的网页是那个组件 然后再去渲染相对应得组件
	 */
	const content = renderToString(
		<StaticRouter location={req.path} context={{}}>
			{Routes}
		</StaticRouter>
	);
	res.send(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Document</title>
	</head>
	<body>
		 <div id="root">${content}</div>
		 <script src="/index.js"></script>
	</body>
	</html>`);
});

var server = app.listen(3000);
console.log('服务器3000开启了');
