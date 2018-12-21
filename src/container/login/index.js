import React from 'react';
const Login = () => {
	return (
		<div>
			用户名： <input type="text" />
			<button onClick={() => alert('点击开始了')}>登录</button>
		</div>
	);
};
export default Login;
