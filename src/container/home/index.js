// const React = require('react');
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionGetHomeList } from './store/action';
class Home extends Component {
	render() {
		return (
			<div>
				<Link to="/login">
					<div>Login</div>
				</Link>
				<Link to="/">
					<div>Home</div>
				</Link>
				<p>这里显示: {this.props.name}</p>
				{this.props.newsList.map(item => {
					return <div key={item.id}>{item.title}</div>;
				})}
				<div>ssr渲染点击事件</div>
				<button onClick={() => alert('点击开始了')}>点击</button>
			</div>
		);
	}
	componentDidMount() {
		this.props.getHomeList();
	}
}

const mapStateToProps = state => ({
	name    : state.home.name,       //home中的name
	newsList: state.home.newsList,
	age     : state.age,
	love    : state.love,
});

const mapDispatchToProps = dispatch => ({
	getHomeList() {
		dispatch(actionGetHomeList());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
// node下暴露不可以export default Home;

// module.export = {
// 	default: Home,
// };
