<template>
	<v-btn
		fab
		:color="!inCart ? 'info' : 'green'"
		class="white--text"
	>
		<v-icon dark>{{!inCart ? 'add_shopping_cart' : 'check' }}</v-icon>
	</v-btn>
</template>


<script>
export default {
	props: {
		inCart: {
			type: Boolean,
			default: false
		}
	}
};
</script>
