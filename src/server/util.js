import React from 'react';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../Router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import getStore from '../store';

export const render = req => {
	/**
	 * store里写什么并不知道要根据url请求，然后填充数据
	 */
	const store = getStore();
	// const matchRouters = [];
	const matchedRouters = matchRoutes(routes, req.path);
	console.log(matchedRouters);

	// routes.some(route => {
	// 	const match = matchPath(req.path, route);
	// 	if (match) {
	// 		matchRouters.push(route);
	// 	}
	// 	console.log(matchRouters);

	// 	return match;
	// });

	//让matchRoutes里面的组件 相对应得loadData方法执行一遍

	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<div>
					{routes.map(route => {
						<Route {...route} />;
					})}
				</div>
			</StaticRouter>
		</Provider>
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
