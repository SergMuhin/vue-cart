<template>
	<v-footer dark height="auto">
		<v-card flat tile class="grey darken-3 white--text text-xs-center">
			<v-card-text>
				<v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
					<v-icon size="24px">{{ icon }}</v-icon>
				</v-btn>
			</v-card-text>

			<v-card-text class="white--text pt-0">
				<v-layout wrap>
					<v-flex
						sm4
						xs12
					>Lorem ipsum — классическая панграмма, условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы.</v-flex>
					<v-flex
						sm4
						xs12
					>Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку[1].</v-flex>
					<v-flex
						sm4
						xs12
					>Распространился в 1970-х годах из-за трафаретов компании Letraset, a затем — из-за того, что служил семплом в программе PageMaker.</v-flex>
				</v-layout>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-text class="white--text">
				&copy; 2018 —
				<strong>SergMuhin</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>


<script>
export default {
	data() {
		return {
			icons: [
				"fab fa-facebook",
				"fab fa-twitter",
				"fab fa-google-plus",
				"fab fa-linkedin",
				"fab fa-instagram"
			]
		};
	}
};
</script>
