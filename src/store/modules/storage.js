const state = {
	cart: [],
	favorites: [],
	activeTypeId: 0,
	page: 1
};

const getters = {
	page() {
		return state.page;
	}
};

const actions = {
	getOffers(
		context,
		payload = [{ storage: 'cart' }, { storage: 'favorites' }]
	) {
		payload.forEach(item => {
			let offers = localStorage.getItem(item.storage);
			if (offers) {
				offers = JSON.parse(offers);
				context.commit('SET_OFFERS', {
					storage: item.storage,
					offers: offers
				});
			}
		});
	},
	getActiveTypeId(context) {
		let id = localStorage.getItem('activeTypeId');
		if (id) {
			context.commit('SET_ACTIVE_TYPE_ID', +id);
		}
	}
};

const mutations = {
	CHANGE_QUANTITY(state, payload) {
		let index = state.cart.findIndex(item => item.id === payload.id);
		if (!payload.add && state.cart[index].quantity === 1) {
			return;
		}
		payload.add
			? state.cart[index].quantity++
			: state.cart[index].quantity--;
		this.commit('storage/SET_OFFERS', {
			storage: 'cart',
			offers: state.cart
		});
	},
	REMOVE_FROM_CART(state, payload) {
		let index = state.cart.findIndex(item => item.id === payload);
		state.cart.splice(index, 1);
		this.commit('storage/SET_OFFERS', {
			storage: 'cart',
			offers: state.cart
		});
	},
	CLEAR(state, payload) {
		state[payload.storage] = [];
		this.commit('storage/SET_OFFERS', {
			storage: [payload.storage],
			offers: state[payload.storage]
		});
	},
	CHANGE(state, payload) {
		let localState = state[payload.storage];
		let ids = localState.map(item => item.id);
		if (!ids.includes(payload.offer.id)) {
			localState.push(payload.offer);
			let str = payload.storage === 'cart' ? 'Корзину' : 'Избранное';
			this._vm.$toastr.success(`Добавлен в ${str}`, payload.offer.name, {
				positionClass: 'toast-bottom-right'
			});
		} else {
			let index = localState.findIndex(
				item => item.id === payload.offer.id
			);
			if (payload.storage === 'cart') {
				localState[index].quantity++;
			} else {
				localState.splice(index, 1);
			}
		}
		this.commit('storage/SET_OFFERS', {
			storage: payload.storage,
			offers: localState
		});
	},
	SET_OFFERS(state, payload) {
		state[payload.storage] = payload.offers;
		localStorage.setItem(
			payload.storage,
			JSON.stringify(state[payload.storage])
		);
	},
	SET_ACTIVE_TYPE_ID(state, payload) {
		state.page = 1;
		state.activeTypeId = payload;
		localStorage.setItem('activeTypeId', payload);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};
