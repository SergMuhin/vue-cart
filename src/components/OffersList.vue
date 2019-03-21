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

				<!-- TODO настроить сортировку по алфавиту, цене и скидкам -->
				<!-- <v-menu offset-y>
					<template v-slot:activator="{ on }">
						<v-btn color="primary" dark v-on="on">Сортировать</v-btn>
					</template>
					<v-list>
						<v-list-tile v-for="item in sort" @click="sortOffers(item.func)" :key="item.func">
							<v-list-tile-title>
								<v-icon>{{ item.icon }}</v-icon>
								{{ item.name }}
							</v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>-->
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
			],
			sort: [
				{
					id: 1,
					name: "По алфавиту",
					icon: "keyboard_arrow_up",
					func: "alphabet-asc"
				},
				{
					id: 2,
					name: "По алфавиту",
					icon: "keyboard_arrow_down",
					func: "alphabet-desc"
				},
				{
					id: 3,
					name: "По цене",
					icon: "keyboard_arrow_up",
					func: "price-asc"
				},
				{
					id: 4,
					name: "По цене",
					icon: "keyboard_arrow_down",
					func: "price-desc"
				}
			],
			sortCond: {
				direction: 1,
				type: 1
			}
		};
	},
	computed: {
		activeOffers() {
			return this.filteredOffers.slice(
				(this.page - 1) * this.limit,
				this.page * this.limit
			);
		},
		filteredOffers() {
			return this.activeTypeId
				? this.offers.filter(item => item.typeId === this.activeTypeId)
				: this.offers;
		},
		count() {
			return this.filteredOffers.length;
		},
		activeTypeId() {
			return this.$store.state.storage.activeTypeId;
		}
	},
	methods: {
		// sortOffers(func) {
		// console.log(func);
		// console.log(this.sortCond);
		// debugger;
		// switch (func) {
		// 	case "alphabet-asc":
		// 		break;
		// 	case "alphabet-desc":
		// 		break;
		// 	case "price-asc":
		// 		this.filteredOffers.sort((a, b) => a.price - b.price);
		// 		break;
		// 	case "price-desc":
		// 		this.filteredOffers.sort((a, b) => b.price - a.price);
		// 		break;

		// 	default:
		// 		return;
		// }
		// },
		filterClickHandler(id) {
			this.page = 1;
			this.$store.commit("storage/SET_ACTIVE_TYPE_ID", id);
		}
	}
};
</script>
