<template>
	<div class="not-found">
		<div class="d-fl justify-space-between mb-4">
			<h1>Не найдено</h1>
			<v-btn @click="$router.go(-1)" color="blue lighten-2" flat>
				<v-icon dark left>arrow_back</v-icon>Back
			</v-btn>
		</div>
	</div>
</template>

