<template>
<div>
    <NavBar></NavBar>
      <main>
    <Nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: 'description',
          content:
            'TringTring is hét antwoord op de autovrije binnenstad. Dat doen we op de fiets: zo maken we de stad een beetje mooier.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@TringTring' },
        {
          property: 'og:title',
          content:
            'Het nieuwe bakfiets bezorgnetwerk met liefde voor horeca in Amsterdam en Utrecht',
        },
        {
          property: 'og:description',
          content:
            'Wij bevoorraden dagelijks meer dan 350 restaurants en hotels in Amsterdam en Utrecht. Alleen op de de bakfiets. On-demand. 100% groen. 7 dagen per week.',
        },
      ],

      script: [
  { src: "/scripts/main.js",  defer: true}
      ]
    }
  }
}
</script>




