<template>
	<header class="primary header">
		<v-container class="py-2 d-fl justify-space-between">
			<router-link
				class="white--text display-1 d-fl align-center logo"
				:to="{name: 'home'}"
			>Vue Shopping Cart</router-link>

			<v-spacer></v-spacer>

			<v-btn :to="{name: 'favorites'}" large icon class="white--text">
				<v-badge overlap color="red">
					<template v-if="$store.state.storage.favorites.length" v-slot:badge>
						<span>{{$store.state.storage.favorites.length}}</span>
					</template>
					<v-icon large>favorite</v-icon>
				</v-badge>
			</v-btn>

			<v-btn :to="{name: 'cart'}" large icon class="white--text">
				<v-badge overlap color="red">
					<template v-if="$store.state.storage.cart.length" v-slot:badge>
						<span>{{$store.state.storage.cart.length}}</span>
					</template>
					<v-icon large>shopping_cart</v-icon>
				</v-badge>
			</v-btn>
		</v-container>
	</header>
</template>
