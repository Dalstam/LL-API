<template>
    <div>
        <!-- STEP 2 -->
					<div class="pm-step">
						<h1 class="form-title">Hoeveel uur per week kun je Tringen?</h1>

						<select class="form-control form-group input-lg" name="uren"  data-rule-required="true" v-model="uren" @change="uurInfo()">
							<option value="">Kies aantal uren</option>
							<option value="5-10 uur">5 - 10 uur</option>
							<option value="10-15 uur">10 - 15 uur</option>
							<option value="15-20 uur">15 - 20 uur</option>
							<option value="20-40 uur">20 - 40 uur</option>
						</select>
					</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      uren: '',
    }
  },
  methods: {
    uurInfo() {
      this.$store.commit('setuurInfo', {
        uren: this.uren,
      })

	//   Dit is voorbeeld dat de store werkt!!
      console.log(this.$store.getters.uurgetter);
    },
  },
}
</script>
