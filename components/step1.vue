<template>
  <div>
    <!-- STEP 1 -->

    <div class="pm-step">
      <h1 class="form-title">Meld je aan als Tringer</h1>
      <input
        v-model="voornaam"
        class="form-control form-group input-lg"
        name="voornaam"
        type="text"
        placeholder="Voornaam"
        data-rule-required="true"
        @change="persInfo()"
      />
      <input
        v-model="achternaam"
        class="form-control form-group input-lg"
        name="achternaam"
        type="text"
        placeholder="Achternaam"
        data-rule-required="true"
        @change="persInfo()"
      />
      <input
        v-model="email"
        class="form-control form-group input-lg"
        name="email"
        type="email"
        placeholder="E-mail"
        data-rule-required="true"
        @change="persInfo()"
      />
      <input
        v-model="plaats"
        class="form-control form-group input-lg"
        name="plaats"
        type="text"
        placeholder="Plaats"
        data-rule-required="true"
        @change="persInfo()"
      />
      <input
        v-model="telefoon"
        class="form-control form-group input-lg"
        name="telefoon"
        type="tel"
        placeholder="Mobiel nr."
        data-rule-required="true"
        maxlength="15"
        @change="persInfo()"
      />
      <select class="form-control form-group input-lg" name="toestel" required v-model="toestel" @change="persInfo()">
        <option value="">Type toestel</option>
        <option value="android">Android</option>
        <option value="iphone">iPhone</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      voornaam: '',
      achternaam: '',
      email: '',
      plaats: '',
      telefoon: '',
      toestel: '',
    }
  },
  methods: {
    persInfo() {
      this.$store.commit('setpersInfo', {
        voornaam: this.voornaam,
        achternaam: this.achternaam,
        email: this.email,
        plaats: this.plaats,
        telefoon: this.telefoon,
        toestel: this.toestel,
      })

	//   Dit is voorbeeld dat de store werkt!!
      console.log(this.$store.getters.persgetter);
    },
  },
}
</script>

