import Vue from 'vue';
import Vuex from 'vuex';

import storage from './modules/storage';
import offers from './modules/offers';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		storage,
		offers
	}
});
