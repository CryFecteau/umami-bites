<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <HeaderComponent />
    <HeroComponent />
    <AboutComponent />
    <PopularComponent />
    <TrendingComponent />
    <SubscribeComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/header.component.vue";
import HeroComponent from "./components/hero.component.vue";
import AboutComponent from "./components/about.component.vue";
import PopularComponent from "./components/popular.component.vue";
import TrendingComponent from "./components/trending.component.vue";
import SubscribeComponent from "./components/subscribe.component.vue";
import FooterComponent from "./components/footer.component.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    PopularComponent,
    TrendingComponent,
    SubscribeComponent,
    FooterComponent,
  },
};
</script>

<style>
:root {
  --playfair-display: "Playfair Display", serif;
  --plus-jakarta-sans: "Plus Jakarta Sans", sans-serif;

  --primary-color: #b1454a;
  --secondary-color: #121212;

  --black-200: #020202;
  --black-300: #333333;
  --black-400: #1f1e31;
  --black-500: #555555;
  --gray-100: #888888;

  --color-white: #fff;
  --color-creamson: #fff0de;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  max-width: 1280px;
  margin: 0 auto;
  background-color: var(--color-creamson);
}

a {
  text-decoration: none;
  color: inherit;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
