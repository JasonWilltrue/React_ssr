module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				options: {
					presets: [
						'react',
						'stage-0',
						[
							'env',
							{
								targets: {
									browsers: ['last 2 versions'], //兼容浏览器最后2个版本
								},
							},
						],
					],
				},
			},
		],
	},
};
