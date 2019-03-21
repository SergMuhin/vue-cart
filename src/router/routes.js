import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Favorites from '../views/Favorites.vue';
import Offer from '../views/Offer.vue';
import NotFound from '../views/NotFound.vue';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/favorites',
		name: 'favorites',
		component: Favorites
	},
	{
		path: '/offer/:offerId',
		name: 'offer',
		component: Offer
	},
	{
		path: '*',
		name: 'not-found',
		component: NotFound
	}
];
