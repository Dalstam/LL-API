<template>
  <main>
    <Nuxt />
  </main>
</template>

<script>
export default {
   head() {
       return {
           meta: [
               {
                  property: "og:title",
                  content: "http://www.tringtring.nl/"
               },
                {
                  property: "og:title",
                  content: "Het nieuwe bakfiets bezorgnetwerk met liefde voor horeca in Amsterdam en Utrecht"
               },
                {
                  property: "og:title",
                  content: "Wij bevoorraden dagelijks meer dan 350 restaurants en hotels in Amsterdam en Utrecht. Alleen op de de bakfiets. On-demand. 100% groen. 7 dagen per week."
               },
                {
                  name: "description",
                  content: "TringTring is hét antwoord op de autovrije binnenstad. Dat doen we op de fiets: zo maken we de stad een beetje mooier."
                } 
           ]
       }

    }
}
</script>