import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Router';
import { renderToString } from 'react-dom/server';
export const render = req => {
	/**
	 * StaticRouter 并不智能  要求浏览器端发送请求地址location  根据地址判断请求的网页是那个组件 然后再去渲染相对应得组件
	 */
	const content = renderToString(
		<StaticRouter location={req.path} context={{}}>
			{Routes}
		</StaticRouter>
	);
	return `<!DOCTYPE html>
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
	</html>`;
};
