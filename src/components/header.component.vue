<template>
  <header>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <nav class="header-nav">
      <div class="header-logo">
        <h4 data-aos="fade-down">Umami Bites</h4>
        <div class="header-logo-overlay"></div>
      </div>

      <ul class="header-menu" data-aos="fade-down">
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Food</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>

      <ul class="header-menu-mobile" data-aos="fade-down">
        <li>
          <i class="fas fa-bars"></i>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header-nav {
  display: flex;
  overflow: hidden;
}

.header-logo {
  flex: 1;
  display: flex;
  position: relative;
  padding: 20px;
}

.header-logo-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  background-color: var(--primary-color);
  z-index: -1;
}

.header-logo h4 {
  padding-left: 30px;
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  font-family: var(--playfair-display);
  color: #fff;
  opacity: 0.8;
}

.header-menu,
.header-menu-mobile {
  padding: 20px;
  flex: 1.236;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 64px;
  list-style: none;
}

.header-menu li {
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 16px;
  text-transform: uppercase;
  line-height: 20px;
  cursor: pointer;
}

.header-menu li img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.header-menu-mobile {
  color: #fff;
  display: none;
  gap: 20px;
  position: relative;
}
@media screen and (max-width: 900px) {
  .header-nav {
    background: var(--primary-color);
  }

  .header-menu {
    display: none;
  }

  .header-menu-mobile {
    display: flex;
  }
}

@media screen and (max-width: 550px) {
  .header-logo {
    padding-left: 0;
  }
}
</style>
