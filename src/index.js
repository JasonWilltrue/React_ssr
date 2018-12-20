// var express = require('express');
import express from 'express';
import Home from './container/home/index.js';
import React from 'react';
import { renderToString } from 'react-dom/server.js';

const app = express();
app.use(express.static('public')); //让浏览器识别静态文件
const content = renderToString(<Home />);

app.get('/', function(req, res) {
	res.send(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">\
		<script src="/index.js"></script>
		<title>Document</title>
	</head>
	<body>
		 <div id="root">${content}</div>
	</body>
	</html>`);
});

var server = app.listen(3000);
console.log('服务器3000开启了');
