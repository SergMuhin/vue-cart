<template>
	<div class="empty-state text-xs-center">
		<p class="display-2 grey--text">
			<slot></slot>
		</p>
		<v-btn :to="{name: 'home'}" color="info">Начать покупки</v-btn>
	</div>
</template>


<style lang="scss">
.empty-state {
	margin: 10vw 0;
}
</style>
