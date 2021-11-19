<template>
    <!-- STEP 4 -->
					<div class="pm-step">
						<h1 class="form-title">Wil je ‘s ochtends Tringen?</h1>

						<label class="form-group text-left input-lg form-control">
							<input type="radio" name="Ochtend" value="Ja" data-rule-required="true" v-model="Ochtend" @change="ochtendJaofNee">
							<span>Ja, ik ben een vroege vogel</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="radio" name="Ochtend" value="Nee" data-rule-required="true" v-model="Ochtend" @change="ochtendJaofNee">
							<span>Nee, liever niet</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
					</div>
</template>
<script>
export default {
  data() {
    return {
      Ochtend: '',
    }
  },
  methods: {
    ochtendJaofNee() {
      this.$store.commit('setochtendJaofNee', {
        Ochtend: this.Ochtend
      })

	//   Dit is voorbeeld dat de store werkt!!
    console.log(this.$store.getters.Ochtendgetter);
    },
  },
}
</script>

