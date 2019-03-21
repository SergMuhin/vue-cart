<template>
	<v-card class="offer" hover>
		<v-img
			class="offer-image"
			:lazy-src="`https://robohash.org/${offer.id}.png?size=50x50&set=set${offer.typeId}`"
			:src="`https://robohash.org/${offer.id}.png?size=600x600&set=set${offer.typeId}`"
		></v-img>

		<div @click.prevent="$store.commit('storage/CHANGE', {storage: 'favorites', 'offer': offer})">
			<favorites-button
				:isFavorites="$store.state.storage.favorites.map(item => item.id).includes(offer.id)"
			></favorites-button>
		</div>

		<v-card-title primary-title>
			<div class="mx-auto text-xs-center text-truncate">
				<h3 class="display-1 mb-0">{{ offer.name }}</h3>
			</div>
		</v-card-title>

		<v-card-actions class="justify-space-between">
			<div
				:class="colorDiscountClass"
				class="offer-discount title pa-1 lighten-2 white--text"
			>-{{ offer.discount }}&nbsp;%</div>
			<div class="offer-price text-xs-center">
				<div class="offer-price-prev title grey--text">{{ startPrice | priceFormat }}&nbsp;&#8381;</div>
				<div class="offer-price-current headline">{{ offer.price | priceFormat}}&nbsp;&#8381;</div>
			</div>
			<div @click.prevent="$store.commit('storage/CHANGE', {storage: 'cart', 'offer': offer})">
				<add-to-cart-button :inCart="$store.state.storage.cart.map(item => item.id).includes(offer.id)"></add-to-cart-button>
			</div>
		</v-card-actions>
	</v-card>
</template>


<script>
import FavoritesButton from "../components/FavoritesButton.vue";
import AddToCartButton from "../components/AddToCartButton.vue";

export default {
	components: {
		"favorites-button": FavoritesButton,
		"add-to-cart-button": AddToCartButton
	},
	props: {
		offer: {
			required: true,
			type: Object
		}
	},
	computed: {
		// Класс для цвета в зависимости от размера скидки
		colorDiscountClass() {
			let str = "";
			if (this.offer.discount >= 15 && this.offer.discount < 20)
				str = "pink";
			if (this.offer.discount >= 20 && this.offer.discount < 25)
				str = "purple";
			if (this.offer.discount >= 25) str = "green";
			return str;
		},
		// Начальная цена
		startPrice() {
			return Math.trunc(
				this.offer.price / ((100 - this.offer.discount) / 100)
			);
		}
	}
};
</script>


<style lang="scss" scoped>
.offer {
	&-image {
		min-height: 278px;
	}
	&-price-prev {
		text-decoration: line-through;
	}
}
</style>
