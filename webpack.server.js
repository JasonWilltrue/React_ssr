const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base');

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

module.exports = { config, serverConfig };
