<template>
  <main>
    <NavBar></NavBar>
    <Nuxt />
    <Footer></Footer>
  </main>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: '000',
          name: 'description',
          content:
            'TringTring is hét antwoord op de autovrije binnenstad. Dat doen we op de fiets: zo maken we de stad een beetje mooier.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@TringTring' },
        {
          hid: '1',
          property: 'og:title',
          content:
            'Het nieuwe bakfiets bezorgnetwerk met liefde voor horeca in Amsterdam en Utrecht',
        },
        {
          hid: '2',
          property: 'og:description',
          content:
            'Wij bevoorraden dagelijks meer dan 350 restaurants en hotels in Amsterdam en Utrecht. Alleen op de de bakfiets. On-demand. 100% groen. 7 dagen per week.',
        },
      ],
    }
  },
}
</script>




