<template>
    <div>
        <!-- STEP 3 -->
		<div class="pm-step">
				<h1 class="form-title">Wat is je leeftijd?</h1>
				<input class="form-control form-group input-lg" type="number"  maxlength="2" name="leeftijd" placeholder=""  data-rule-required="true" v-model="leeftijd" @change="leeftijdInfo()"/>
		</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      leeftijd: '',	
    }
  },
  methods: {
    leeftijdInfo() {
      this.$store.commit('setleeftijdInfo', {
        leeftijd: this.leeftijd,
      })

	//   Dit is voorbeeld dat de store werkt!!
    console.log(this.$store.getters.leeftijdgetter);
    },
  },
}
</script>