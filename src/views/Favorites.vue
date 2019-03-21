<template>
	<main class="favorites">
		<div class="d-fl justify-space-between mb-4">
			<h1>Избранное</h1>
			<v-btn @click="$router.go(-1)" color="blue lighten-2" flat>
				<v-icon dark left>arrow_back</v-icon>Back
			</v-btn>
		</div>

		<template v-if="offers.length">
			<offers-list :offers="offers"></offers-list>
		</template>

		<empty-state v-else>В избранном пусто</empty-state>
	</main>
</template>


<script>
import OffersList from "../components/OffersList.vue";
import EmptyState from "../components/EmptyState.vue";

export default {
	components: {
		"offers-list": OffersList,
		"empty-state": EmptyState
	},
	computed: {
		// Товары избранного
		offers() {
			return this.$store.state.storage.favorites;
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			if (from.name !== "offer") {
				vm.$store.commit("storage/SET_ACTIVE_TYPE_ID", 0);
			}
		});
	}
};
</script>
