<template>
	<div class="favorites-button d-flex justify-end pa-0">
		<v-btn
			fab
			small
			:color="!isFavorites ? 'blue' : 'red'"
			class="favorites-button white--text"
			style="max-width: 40px;"
		>
			<v-icon dark>{{!isFavorites ? 'favorite_border' : 'favorite' }}</v-icon>
		</v-btn>
	</div>
</template>


<script>
export default {
	props: {
		isFavorites: {
			type: Boolean,
			default: false
		}
	}
};
</script>


<style lang="scss" scoped>
.favorites-button {
	top: 0;
	right: 0;
	position: absolute;
}
</style>
