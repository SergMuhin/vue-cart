<template>
	<div class="cart">
		<div class="d-fl justify-space-between mb-4">
			<h1>Корзина</h1>
			<v-btn @click="$router.go(-1)" color="blue lighten-2" flat>
				<v-icon dark left>arrow_back</v-icon>Back
			</v-btn>
		</div>

		<template v-if="offers.length && !send">
			<v-layout>
				<v-spacer></v-spacer>
				<v-chip
					@click="$store.commit('storage/CLEAR', {storage: 'cart'})"
					outline
					disabled
					color="pink lighten-1"
				>
					Удалить всё
					<v-icon right>delete</v-icon>
				</v-chip>
			</v-layout>

			<div class="cart-table">
				<div :key="+cartItem.id" class="cart-table-item d-fl align-center" v-for="cartItem in offers">
					<div class="cart-table-item-image streched-image mr-3 my-2">
						<router-link :to="{name: 'offer', params: {'offerId': cartItem.id}}">
							<v-img
								class="offer-image"
								:lazy-src="`https://robohash.org/${cartItem.id}.png?size=50x50&set=set${cartItem.typeId}`"
								:src="`https://robohash.org/${cartItem.id}.png?size=600x600&set=set${cartItem.typeId}`"
							></v-img>
						</router-link>
					</div>

					<div class="main-wrap d-fl">
						<div class="mobile-wrapper d-fl justify-space-between align-center">
							<div class="cart-table-item-name title pr-4">
								<router-link :to="{name: 'offer', params: {'offerId': cartItem.id}}">{{ cartItem.name }}</router-link>
							</div>

							<div
								class="cart-table-item-price title text-xs-right"
							>{{ cartItem.price | priceFormat }}&nbsp;&#8381;</div>
						</div>
						<div class="mobile-wrapper-total d-fl justify-space-between">
							<div class="cart-table-item-count">
								<div class="quantity d-fl">
									<v-btn
										@click="$store.commit('storage/CHANGE_QUANTITY', {add: false, id: cartItem.id})"
										color="grey"
										flat
										icon
										v-cloak
									>
										<v-icon v-cloak>remove</v-icon>
									</v-btn>
									<div class="d-fl justify-center ff-c align-center">{{ cartItem.quantity }}</div>

									<v-btn
										@click="$store.commit('storage/CHANGE_QUANTITY', {add: true, id: cartItem.id})"
										color="grey"
										flat
										icon
										v-cloak
									>
										<v-icon v-cloak>add</v-icon>
									</v-btn>
								</div>
							</div>

							<div
								class="cart-table-item-summ headline d-fl align-center"
							>{{ (cartItem.price * cartItem.quantity) | priceFormat}}&nbsp;&#8381;</div>

							<div class="cart-table-item-remove">
								<v-btn
									@click="$store.commit('storage/REMOVE_FROM_CART', cartItem.id)"
									color="grey"
									flat
									icon
									v-cloak
								>
									<v-icon v-cloak>close</v-icon>
								</v-btn>
							</div>
						</div>
					</div>
				</div>
			</div>

			<v-layout>
				<v-spacer></v-spacer>
				<div class="text-xs-right">
					<div class="my-3 display-1 font-weight-light">
						Итого:
						<span class="display-2">{{ total | priceFormat }}&nbsp;&#8381;</span>
					</div>
					<v-btn @click="sendOrder()" color="info">Отправить</v-btn>
				</div>
			</v-layout>
		</template>

		<empty-state v-if="!offers.length && !send">В корзине пусто</empty-state>

		<template v-if="send">
			<div class="empty-state text-xs-center display-3 green--text">Благодарим за заказ!!!</div>
		</template>
	</div>
</template>


<script>
import EmptyState from "../components/EmptyState.vue";

export default {
	components: {
		"empty-state": EmptyState
	},
	data() {
		return {
			loader: null,
			loading: false,
			send: false
		};
	},
	computed: {
		offers() {
			return this.$store.state.storage.cart;
		},
		total() {
			let sum = 0;
			this.offers.forEach(offer => {
				sum += offer.price * offer.quantity;
			});
			return sum;
		}
	},
	methods: {
		sendOrder() {
			this.$store.commit("storage/CLEAR", { storage: "cart" });
			this.send = true;
			this.$toastr.success(`Заказ успешно отправлен!`, `Отлично`, {
				positionClass: "toast-bottom-right"
			});
		}
	}
};
</script>


<style lang="scss"scoped>
.cart-table-item {
	border-bottom: 1px solid #ddd;
	position: relative;
	&-image {
		width: 45vw;
		max-height: 150px;
		max-width: 150px;
	}
	&-count {
		margin: 0 0 0 8%;
	}
}

.main-wrap {
	width: 100%;
}

.mobile-wrapper {
	width: 40%;
	&-total {
		width: 60%;
		flex-flow: wrap;
	}
}

@media (max-width: 835px) {
	.main-wrap {
		flex-flow: column;
	}

	.mobile-wrapper {
		margin: 0 0 16px 0;
		width: 100%;
		flex-flow: column;
		align-items: baseline;
		&-total {
			width: 100%;
			align-items: baseline;
		}
	}

	.cart-table-item {
		&-name {
			margin: 0 0 12px 0;
		}
		&-remove {
			position: absolute;
			top: 10px;
			right: -5px;
		}
		&-count {
			margin: 0;
		}
		&-summ {
			margin: 0 7px 0 0;
		}
	}
}

@media (max-width: 480px) {
	.mobile-wrapper-total {
		flex-flow: column;
		align-items: flex-end;
	}
}
</style>
