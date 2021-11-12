<template>
  <div>
    <!-- Main menu start -->
    <nav id="main-menu" class="navbar bbb">
      <div class="container small">
        <div class="pull-left hidden-xs hidden-sm">
          <ul class="desktop-nav">
            <li>
              <a href="/">
                <img
                  src="~/assets/images/icons/TringTring_logo_white.svg"
                  alt="Tring Tring"
                  width="50"
                  height="43"
                />
              </a>
            </li>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/over-tringtring">Over TringTring</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/leveranciers">Voor Leveranciers</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/word-tringer">Word Tringer</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="pull-right hidden-xs hidden-sm">
          <ul class="desktop-nav">
            <li>
              <a class="menuCTA" href="tel:+31202440888"
                >Vraag? Bel! 020 244 0888</a
              >
            </li>
          </ul>
        </div>

        <div class="pull-left visible-xs visible-sm">
          <ul class="desktop-nav">
            <li>
              <NuxtLink to="index.html" class="no-link mobile-menu-logo">
                <img
                  src="~/assets/images/icons/TringTring_logo_white.svg"
                  alt="Tring Tring"
                  width="44"
                  height="38"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="hamburger-btn">
          <button type="button" class="navbar-toggle collapsed">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
      </div>

      <div id="slide-trans-layer"></div>
      <div id="slidemenu">
        <ul class="mobile-nav">
          <li>
            <NuxtLink to="/index">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/over-tringtring">Over TringTring</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/leveranciers">Voor Leveranciers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/word-tringer">Word Tringer</NuxtLink>
          </li>
          <li>&nbsp;</li>
          <li>
            <a href="mailto:support@tringtring.nl">support@tringtring.nl</a>
          </li>
          <li>
            <a href="tel:+31202440888">020 244 0888</a>
          </li>
        </ul>

        <div class="social pull-left">
          <a
            class="no-link"
            href="https://www.facebook.com/pages/TringTring/796606900374195"
            target="_blank"
          >
            <img
              src="~/assets/images/icons/contact_facebook.svg"
              alt="facebook"
              width="30"
              height="30"
            />
          </a>
          <a
            class="no-link"
            href="https://twitter.com/TringTring"
            target="_blank"
          >
            <img
              src="~/assets/images/icons/contact_twitter.svg"
              alt="twitter"
              width="30"
              height="30"
            />
          </a>
          <a
            class="no-link"
            href="https://www.instagram.com/tringtring/"
            target="_blank"
          >
            <img
              src="~/assets/images/icons/contact_instagram.svg"
              alt="instagram"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </nav>
    <div id="navbar-fix"></div>
    <!-- Main menu end -->
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  font-weight: bolder;
  border-bottom: 5px solid #fff;
}
</style>