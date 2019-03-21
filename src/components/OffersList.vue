<template>
	<div class="offers-list">
		<v-container class="px-0 pt-0" grid-list-md>
			<div class="mb-3 text-xs-left d-fl">
				<v-chip
					@click="filterClickHandler(0)"
					:selected="activeTypeId === 0"
					outline
					color="primary"
				>Все</v-chip>

				<v-chip
					outline
					v-for="type in types"
					@click="filterClickHandler(type.id)"
					color="primary"
					:key="type.id"
					:selected="type.id === activeTypeId"
					:class="{'d-none': !offers.map(offer => offer.typeId).includes(type.id)}"
					class="filter-chip"
				>{{ type.name }}</v-chip>

				<v-spacer></v-spacer>
			</div>

			<v-layout v-if="activeOffers.length" wrap>
				<v-flex v-for="offer in activeOffers" :key="offer.id" lg3 md4 sm6 xs12>
					<router-link :to="{name: 'offer', params: {'offerId': offer.id}}">
						<offers-list-item :offer="offer"></offers-list-item>
					</router-link>
				</v-flex>
			</v-layout>

			<div v-if="count > limit" class="mt-5 text-xs-center">
				<v-pagination v-model="page" :length=" Math.ceil(count / limit)" :total-visible="7"></v-pagination>
			</div>
		</v-container>
	</div>
</template>


<script>
import OffersListItem from "../components/OffersListItem.vue";

export default {
	components: {
		"offers-list-item": OffersListItem
	},
	props: {
		offers: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			page: this.$store.getters["storage/page"],
			limit: 12,
			types: [
				{ id: 1, name: "Robots" },
				{ id: 2, name: "Aliens" },
				{ id: 4, name: "Cats" }
			]
		};
	},
	computed: {
		// Товары в данный момент на странице
		activeOffers() {
			return this.filteredOffers.slice(
				(this.page - 1) * this.limit,
				this.page * this.limit
			);
		},
		// Товары по активному фильтру
		filteredOffers() {
			return this.activeTypeId
				? this.offers.filter(item => item.typeId === this.activeTypeId)
				: this.offers;
		},
		// Количество отфильтрованных товаров
		count() {
			return this.filteredOffers.length;
		},
		// Текущий активный id фильтра
		activeTypeId() {
			return this.$store.state.storage.activeTypeId;
		}
	},
	methods: {
		filterClickHandler(id) {
			this.page = 1;
			this.$store.commit("storage/SET_ACTIVE_TYPE_ID", id);
		}
	}
};
</script>
