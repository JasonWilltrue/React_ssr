// var express = require('express');
import express from 'express';
import Home from './container/home/index.js';
import React from 'react';
import { renderToString } from 'react-dom/server.js';

const app = express();
const content = renderToString(<Home />);
app.get('/', function(req, res) {
	res.send(`<html><head>
	   <title>hello</title>
	 </head><body><p>hello word</p>
	 ${content}
	 </body></html>`);
});

var server = app.listen(3000);
console.log('服务器3000开启了');
