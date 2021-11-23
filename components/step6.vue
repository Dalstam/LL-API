<template>	
	<div>
		<!-- STEP 6 -->
		<div class="pm-step">
			<h1 class="form-title">Waar zou je het liefst op fietsen?</h1>
			<label class="form-group text-left input-lg form-control">
				<input type="radio" value="raceFiets" v-model="Fiets" @change="welkeFiets"> 
				<span>Racefiets</span>
				<img class="vink" src="images/vink-blue.png" />
			</label>
			<label class="form-group text-left input-lg form-control">
				<input type="radio" value="bakFiets" v-model="Fiets" @change="welkeFiets">
				<span>Elektrische bakfiets</span>
				<img class="vink" src="images/vink-blue.png" />
			</label>
			<label class="form-group text-left input-lg form-control">
				<input type="radio" value="goupil" v-model="Fiets" @change="welkeFiets">
				<span>Goupil (Picnic wagentje)</span>
				<img class="vink" src="images/vink-blue.png" />
			</label>
		</div>
	</div>
</template>


<script>
export default {
  data() {
    return {
		Fiets: '',
    }
  },
  methods: {
    welkeFiets() {
      this.$store.commit('setwelkeFiets', {
        Fiets: this.Fiets
      })

	//   Dit is voorbeeld dat de store werkt!!
    console.log(this.$store.getters.Fietsgetter);
    },
  },
}
</script>