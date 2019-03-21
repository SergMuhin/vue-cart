import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';

import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

window.toastr = require('toastr');

Vue.use(VueToastr2);

import Vuetify from 'vuetify';

Vue.use(Vuetify, {
	theme: {
		primary: '#1976D2',
		info: '#2196F3'
	}
});

Vue.filter('priceFormat', value =>
	value ? parseInt(value).toLocaleString('ru-RU') : ''
);

Vue.config.productionTip = false;

new Vue({
	beforeCreate() {
		this.$store.dispatch('storage/getOffers');
		this.$store.dispatch('storage/getActiveTypeId');
	},
	router,
	store,
	render: h => h(App)
}).$mount('#app');
