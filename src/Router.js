import React from 'react';

import { Route } from 'react-router-dom';

import Home from './container/home';
import Login from './container/login';
export default (
	<div>
		<Route path="/" exact component={Home} />
		<Route path="/login" component={Login} />
	</div>
);
