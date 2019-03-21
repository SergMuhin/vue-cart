<template>
	<main class="home">
		<h1 class="mb-4">Товары</h1>
		<offers-list :offers="offers"></offers-list>
	</main>
</template>


<script>
import OffersList from "../components/OffersList.vue";

export default {
	components: {
		"offers-list": OffersList
	},
	computed: {
		offers() {
			return this.$store.state.offers.active;
		}
	},
	beforeRouteLeave(to, from, next) {
		if (to.name === "favorites") {
			this.$store.commit("storage/SET_ACTIVE_TYPE_ID", 0);
		}
		next();
	}
};
</script>
