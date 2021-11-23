<template>
	<!-- STEP 7 -->
	<div class="pm-step">
		<h1 class="form-title">Je moet mij hebben</h1>
		<textarea class="form-control input-lg" placeholder="Vertel ons waarom" rows="6" v-model="bericht" @change="updateBericht"></textarea>
		<p>Bericht: {{bericht}} </p>
	</div>
	
</template>	

<script>
export default {
	data() {
		return {
			bericht: '' 
		}
	},
	methods: {
		updateBericht() {
			this.$store.commit('setupdateBericht', {
				bericht: this.bericht
			})
			
		//   Dit is voorbeeld dat de store werkt!!
		console.log(this.$store.getters.berichtgetter)
		},
	},
}
</script>