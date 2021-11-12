<template>
  <div>
    <!-- Modal -->
    <div id="appmodal" class="modal">
      <div class="modal-content">
        <p>Vul je mobiele nummer in<br />en we SMS-en je de download link.</p>
        <form method="post" action="">
          <input
            type="text"
            name="mobile"
            value=""
            placeholder="Vul je 06-nummer in"
          /><button id="submit-phone" type="button" class="btn-inline">
            SMS me de link
          </button>
        </form>
        <p class="tiny">Beschikbaar op iOS en Android</p>
        <div class="close"></div>
      </div>
    </div>

    <div class="bg-dashboard someshadow">
      <!-- Pin -->
      <div id="pin1" class="pin">
        <img
          src="../Assets/images/markers/pin.png"
          alt=""
          width="56"
          height="81"
        />
      </div>
      <div id="pin2" class="pin">
        <img
          src="../Assets/images/markers/pin_2.png"
          alt=""
          width="56"
          height="81"
        />
      </div>
      <div id="pin3" class="pin">
        <img
          src="../Assets/images/markers/pin_3.png"
          alt=""
          width="56"
          height="81"
        />
      </div>
      <div id="pin4" class="pin">
        <img
          src="../Assets/images/markers/pin_4.png"
          alt=""
          width="56"
          height="81"
        />
      </div>
      <div id="pin5" class="pin">
        <img
          src="../Assets/images/markers/pin_5.png"
          alt=""
          width="56"
          height="81"
        />
      </div>

      <div class="container">
        <div class="dashboard-form-container">
          <div id="infopanel">
            <h1>TringTring brengt alles uit de stad bij je thuis.</h1>
            <p>
              sdfsdfPis volori aut verum remquam, et et el illuptam aritatur sum
              quam nihitatem eat ut que as nobit es il ipsam que doluptam rem
              alisciat eos nesciiscium, est, ea dicab incim fugia acidus,
              nonesequ
            </p>
            <div class="close showhide"></div>
          </div>

          <form
            class="dashboard-form"
            id="orderForm"
            action=""
            enctype="application/x-www-form-urlencoded"
            method="post"
          >
            <!-- Steps -->
            <p id="steps" class="tiny">
              <span class="step" id="step0">1</span
              ><span class="step" id="step1">2</span
              ><span class="step" id="step2">3</span
              ><span id="step3"
                ><img
                  src="../Assets/images/icons/bikey_grey.svg"
                  class="svg"
                  width="20"
                  height="16"
                  alt="4"
              /></span>
            </p>

            <div class="pm-step">
              <p>Wat wil je laten bezorgen?</p>
              <input
                type="text"
                name="what"
                id="first-step"
                value=""
                placeholder="Typ je bestelling (alles van een hamburger tot je huissleutels)"
              /><button
                type="button"
                disabled="disabled"
                class="btn-inline navigation"
              >
                Volgende
              </button>
            </div>

            <div class="pm-step">
              <p>Wat is het ophaaladres?</p>
              <input
                type="text"
                name="from"
                value=""
                placeholder="straat, nummer, postcode"
              /><button
                type="button"
                disabled="disabled"
                class="btn-inline navigation"
              >
                Volgende
              </button>
            </div>
            <div class="pm-step">
              <p>Wat is het afleveradres?</p>
              <input
                type="text"
                name="to"
                value=""
                placeholder="straat, nummer, postcode"
              /><button
                type="button"
                disabled="disabled"
                class="btn-inline navigation"
              >
                Volgende
              </button>
            </div>

            <div class="pm-step">
              <p>Welke Type Tringer?</p>
              <div class="select-tringer">
                <input
                  type="radio"
                  name="tringer"
                  value="boodschap"
                  id="boodschap"
                /><label for="boodschap"
                  >Boodschap Tringer<img
                    src="../Assets/images/icons/dashboard_hamburger.svg"
                    width="17"
                    height="16"
                    alt="hamburger"
                /></label>
                <input
                  type="radio"
                  name="tringer"
                  value="fiets"
                  id="fiets"
                /><label for="fiets"
                  >Fiets Tringer<img
                    src="../Assets/images/icons/dashboard_kado.svg"
                    width="17"
                    height="16"
                    alt="kado"
                /></label>
                <input
                  type="radio"
                  name="tringer"
                  value="bakfiets"
                  id="bakfiets"
                /><label for="bakfiets"
                  >Bakfiets Tringer<img
                    src="../Assets/images/icons/dashboard_pakje.svg"
                    width="17"
                    height="16"
                    alt="pakket"
                /></label>
              </div>
              <button
                type="button"
                disabled="disabled"
                class="btn-inline navigation"
              >
                vind Tringer!
              </button>
            </div>
          </form>

          <div class="info showhide">
            <span class="step">i</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gradient dashboard-app bbb">
      <div class="container">
        <p>De lekkerste winkels van jouw stad<br />bezorgen nu bij je thuis.</p>
        <button class="btn" data-modal="appmodal">Stuur mij de App</button>
        <p class="tiny">
          Beschikbaar in Amsterdam en Utrecht.<br />Ontvang bericht zodra we in
          jouw stad starten.
        </p>
        <img
          class="phones"
          src="../Assets/images/dashboard_app.png"
          alt="De TringTring app, ok dan!"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'menu',
}
</script>