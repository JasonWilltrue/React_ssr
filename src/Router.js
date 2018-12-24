import React from 'react';

import { Route, loadData } from 'react-router-dom';

import Home from './container/home';
import Login from './container/login';

export default [
	{
		path     : '/',
		component: Home,
		exact    : true,
		loadData : Home.loadData,
		key      : 'home',
	},
	{
		path     : '/login',
		component: Login,
		exact    : true,
		key      : 'login',
		// loadData : () => getSomeData(),
	},
];

// export default (
// 	<div>
// 		<Route path="/" exact component={Home} />
// 		<Route path="/login" component={Login} />
// 	</div>
// );
