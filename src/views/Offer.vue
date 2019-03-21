<template>
	<div class="offer">
		<div class="d-fl justify-space-between mb-4">
			<h1>{{ offer.name }}</h1>
			<v-btn @click="$router.go(-1)" color="blue lighten-2" flat>
				<v-icon dark left>arrow_back</v-icon>Back
			</v-btn>
		</div>

		<v-layout wrap>
			<v-flex xs12 sm6 mb-3>
				<offers-list-item :offer="offer"></offers-list-item>
			</v-flex>
			<v-flex xs12 sm6 class="d-fl ff-c text-xs-center offer-info">
				<div class="display-2">{{ offer.name }}</div>
				<div
					class="px-2 headline"
				>Lorem ipsum — классическая панграмма, условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы.</div>
			</v-flex>
		</v-layout>
	</div>
</template>


<script>
import OffersListItem from "../components/OffersListItem.vue";

export default {
	components: {
		"offers-list-item": OffersListItem
	},
	computed: {
		// Получение товара по id
		offer() {
			return this.$store.state.offers.active.find(
				item => +item.id === +this.$route.params.offerId
			);
		}
	}
};
</script>


<style lang="scss" scoped>
.offer-info {
	justify-content: space-evenly;
}
</style>
