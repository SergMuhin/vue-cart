<template>
	<v-app id="app" class="text-xs-left">
		<Header/>
		<v-container>
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</v-container>
		<Footer/>
	</v-app>
</template>


<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
	components: {
		Header,
		Footer
	}
};
</script>


<style lang="scss">
@import "~vuetify/dist/vuetify.min.css";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
}

.d-fl {
	display: flex;
}

.ff-c {
	flex-flow: column;
}

.v-chip .v-chip__content {
	cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

::-webkit-scrollbar {
	width: 8px;
}

::-webkit-scrollbar-track {
	background: #e1e1e1;
}

::-webkit-scrollbar-thumb {
	background: #757575;
}

@media only screen and (max-width: 1264px) {
	.container {
		max-width: 100%;
	}
}

@media (max-width: 480px) {
	.logo {
		font-size: 5.5vw !important;
	}
}
</style>
