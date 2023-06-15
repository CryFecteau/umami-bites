<template>
  <div>
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

<style></style>
