import { offers } from '../../offers';

const state = {
	count: 0,
	active: offers
};

const getters = {
	count() {
		return state.count;
	},
	active() {
		return state.active;
	}
};

export default {
	namespaced: true,
	state,
	getters
};
