// var express = require('express');
import express from 'express';
const app = express();

app.use(express.static('public')); //让浏览器识别静态文件

import { render } from './util';

// const content = renderToString(<Home />);
app.get('*', function(req, res) {
	res.send(render(req));
});
var server = app.listen(3000);

console.log('服务器3000开启了');
