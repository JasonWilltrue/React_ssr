// const React = require('react');
import React from 'react';
const Home = () => {
	return (
		<div>
			<div>ssr渲染点击事件</div>
			<button
				onClick={() => {
					alert('点击开始了');
				}}
			>
				点击
			</button>
		</div>
	);
};

// node下暴露不可以export default Home;

// module.export = {
// 	default: Home,
// };
export default Home;
