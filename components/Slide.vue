<template>
      <div
        id="carousel-shops"
        class="carousel shop-carousel slide"
        data-ride="carousel"
      >
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <!-- Andaz - Frank's Smoke house-->
          <div
            id="frank"
            class="item active"
          >
<!--            <img src="~/assets/images/horeca/andaz-amsterdam.jpg"/>-->
            <div class="shop-caption">
              <img
                src="~/assets/images/icons/TringTring_logo_white.svg"
                alt="Tring Tring"
                width="45"
                height="38"
              />
              <h2>Frank's Smoke house</h2>
              <p>bezorgt met TringTring</p>
            </div>
          </div>

          <!--Restaurant-Rijks - GROWx -->
          <div
            class="item"
            style="background-image: url('images/horeca/Restaurant-Rijks.jpg')"
          >
            <div class="shop-caption">
              <img
                src="~/assets/images/icons/TringTring_logo_white.svg"
                alt="Tring Tring"
                width="45"
                height="38"
              />
              <h2>GROWx</h2>
              <p>bezorgt met TringTring</p>
            </div>
          </div>

        </div>

        <!-- Controls -->
        <a
          class="left carousel-control"
          href="#carousel-shops"
          role="button"
          data-slide="prev"
        >
          <img
            src="~/assets/images/chevron_left.svg"
            alt=""
            width="29"
            height="59"
          />
        </a>
        <a
          class="right carousel-control"
          href="#carousel-shops"
          role="button"
          data-slide="next"
        >
          <img
            src="~/assets/images/chevron_right.svg"
            alt=""
            width="29"
            height="59"
          />
        </a>

        <!-- Phone -->
        <img
          src="~/assets/images/bezorg-app.png"
          alt="Horeca in TringTring"
          class="phone"
        />
      </div>    
</template>

<style scoped>
#frank {
    background-image: url('~/assets/images/horeca/andaz-amsterdam.jpg'),
}
</style>