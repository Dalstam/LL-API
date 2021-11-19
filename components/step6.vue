<template>
    <!-- STEP 6 -->
					<div class="pm-step">
						<h1 class="form-title">Waar zou je het liefst op fietsen?</h1>
						<label class="form-group text-left input-lg form-control">
							<input type="checkbox" name="Fiets" value="Racefiets" v-model="Fiets" @change="welkeFiets(value)">
							<span>Racefiets</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="checkbox" name="Fiets" value="Bakfiets" v-model="Fiets" @change="welkeFiets(value)">
							<span>Elektrische bakfiets</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="checkbox" name="Fiets" value="Goupil" v-model="Fiets" @change="welkeFiets(value)">
							<span>Goupil (Picnic wagentje)</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
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
    welkeFiets(value) {
      this.$store.commit('setwelkeFiets', {
        Fiets: this.Fiets
      })

	//   Dit is voorbeeld dat de store werkt!!
    console.log(this.$store.getters.Fietsgetter);
    },
  },
}
</script>