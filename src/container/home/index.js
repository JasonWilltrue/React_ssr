// const React = require('react');
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Home = props => {
	console.log(props);
	return (
		<div>
			<Link to="/login">
				<div>Login</div>
			</Link>
			<Link to="/">
				<div>Home</div>
			</Link>
			<p>这里显示: {props.name}</p>
			<div>ssr渲染点击事件</div>
			<button onClick={() => alert('点击开始了')}>点击</button>
		</div>
	);
};

const mapStateToProps = state => ({
	name: state.name,
	age: state.age,
	love: state.love,
});

const mapDispatchToProps = dispatch => {};

export default connect(
	mapStateToProps,
	null
)(Home);
// node下暴露不可以export default Home;

// module.export = {
// 	default: Home,
// };
