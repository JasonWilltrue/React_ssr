import axios from 'axios';

const renderHomeList = data => ({
	type: 'RENDER_HOME_LIST',
	data,
});

export const actionGetHomeList = () => {
	//异步请求
	return dispatch => {
		axios
			.get('http://rap2api.taobao.org/app/mock/8651/api/tuangou')
			.then(res => {
				console.log(res.data.result);
				const data = res.data.result;
				dispatch(renderHomeList(data));
			})
			.catch(err => {
				console.log(err);
			});
	};
};
