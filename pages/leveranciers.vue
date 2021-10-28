<template>
  <div>
    <div class="bg-white bbb downtobottom">
      <Slide></Slide>
    </div>

    <div class="bg-blue bbb hopontop">
      <div class="container small">
        <h3>Het nieuwe bakfiets bezorgnetwerk met liefde voor horeca</h3>
      </div>
    </div>

    <div class="bg-gradient bg-gradient-map shopowner-form-wrapper">
      <div class="container">
        <h1 class="no-margin-bottom">
          TringTring brengt jouw
          <br />
          producten in de hele stad
        </h1>
        <p>
          TringTring bezorgt dagelijks bij meer dan 300 hotels en restaurants in
          Amsterdam en Utrecht. On-demand en 7 dagen per week beschikbaar tussen
          7:30 en 21:00 uur. Onze Tringers zijn kind aan huis bij alle
          horecagelegenheden in de stad en delen onze liefde voor mooie verse
          producten. Op de bakfiets, en dus nooit last van files en autoluwe
          gebieden
          <br />
          <br />
          <br />
        </p>

        <div class="form-popover">
          <p>
            Wil je meer informatie over TringTring? <br />
            Vul hieronder je gegevens in.
          </p>
        </div>
      </div>

      <!-- A carousel with a form-field in each slide, how about that! -->
      <div
        id="carousel-form"
        class="carousel form-carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item itemAanmelden active">
            <div class="input-wrapper">
              <input
                id="itemCompName"
                type="text"
                value=""
                placeholder="Je bedrijfsnaam"
              />
              <a class="btn" onclick="shopOwnerNext('#itemCompName')"
                >Volgende</a
              >
            </div>
          </div>

          <div class="item itemAanmelden">
            <div class="input-wrapper">
              <input id="itemName" type="text" value="" placeholder="Je naam" />
              <a class="btn" onclick="shopOwnerNext('#itemName')">Volgende</a>
            </div>
          </div>
          <div class="item itemAanmelden">
            <div class="input-wrapper">
              <input
                id="itemPhone"
                type="text"
                value=""
                placeholder="Je telefoonnummer"
              />
              <a class="btn" onclick="shopOwnerNext('#itemPhone')">Volgende</a>
            </div>
          </div>
          <div class="item itemAanmelden">
            <div class="input-wrapper">
              <input
                id="itemEmail"
                type="text"
                value=""
                placeholder="Je email-adres"
              />
              <a class="btn" onclick="shopOwnerNext('#itemEmail')">Volgende</a>
            </div>
          </div>

          <div class="item itemAanmelden">
            <div class="input-wrapper">
              <form id="shopForm" method="post">
                <input
                  type="text"
                  name="website"
                  value=""
                  placeholder="Je website"
                />
                <input type="submit" class="btn" value="Bel me" />
              </form>
            </div>
          </div>
        </div>

        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-slide-to="0" class="active"></li>
          <li data-slide-to="1"></li>
          <li data-slide-to="2"></li>
          <li data-slide-to="3"></li>
          <li data-slide-to="4"></li>
        </ol>
      </div>

      <p class="form-carousel post-busy">Je aanmelding wordt verstuurd...</p>
      <p class="form-carousel post-error">
        Er is iets fout gegaan, we werken aan een oplossing.
      </p>
      <p class="form-carousel post-success">
        Bedankt voor je aanmelding! We nemen snel contact met je op.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title:
        'Voor leveranciers; TringTring - TringTring brengt jouw producten in de hele stad',
    }
  }
}
</script>
