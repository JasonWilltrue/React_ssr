const defaultState = {
	name    : 'jack',
	newsList: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'RENDER_HOME_LIST': 
			const newState = JSON.parse(JSON.stringify(state));
			return {
				...state,
				newsList: action.data,
			};
	}
	return state;
};
