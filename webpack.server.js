const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
	target: 'node', //告诉webpack是服务端还是浏览器端的文件
	mode: 'development',
	entry: './src/server/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	externals: [nodeExternals()],
};

module.exports = merge(config, serverConfig);

// module.exports = {
// 	target: 'node', //告诉webpack是服务端还是浏览器端的文件
// 	mode: 'development',
// 	entry: './src/server/index.js',
// 	output: {
// 		filename: 'bundle.js',
// 		path: path.resolve(__dirname, 'build'),
// 	},
// 	externals: [nodeExternals()],
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js?$/,
// 				loader: 'babel-loader',
// 				exclude: '/node_modules/',
// 				options: {
// 					presets: [
// 						'react',
// 						'stage-0',
// 						[
// 							'env',
// 							{
// 								targets: {
// 									browsers: ['last 2 versions'], //兼容浏览器最后2个版本
// 								},
// 							},
// 						],
// 					],
// 				},
// 			},
// 		],
// 	},
// };
