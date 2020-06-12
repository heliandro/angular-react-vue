<template>
	<div>
		<h1>Componente Home</h1>
		<p>{{ msg }}</p>
		<h2>{{ legenda }}</h2>
		<input type="text" v-model="legenda">
		<button @click="resetLegenda">Reset Legenda</button>
	</div>
</template>

<script>
export default {
	props: ['msg'],
	data: function () {
		return {
			legenda: 'Estou no Vue'
		}
	},
	methods: {
		resetLegenda() {
			this.legenda = 'Estou no Vue';
		}
	}
}
</script>

<style>

</style>
