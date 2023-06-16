<template>
  <footer class="footer flex-between">
    <h3 class="footer-logo"><span>Umami</span> Bites</h3>

    <ul class="footer-nav">
      <li><a href="#menu">Menu</a></li>
      <li><a href="#food">Food</a></li>
      <li><a href="#about-us">About Us</a></li>
      <li><a href="#services">Services</a></li>
    </ul>

    <ul class="footer-social">
      <li class="flex-center">
        <i class="fab fa-facebook-f"></i>
      </li>
      <li class="flex-center">
        <i class="fab fa-instagram"></i>
      </li>
      <li class="flex-center">
        <i class="fab fa-twitter"></i>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 20px 40px;
  background: var(--color-white);
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
}

.footer-logo {
  font-size: 24px;
  font-weight: bold;
  font-family: var(--playfair-display);
  text-transform: uppercase;
  color: var(--secondary-color);
  cursor: pointer;
}

.footer-logo span {
  color: var(--primary-color);
}

.footer ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 64px;
}

.footer ul:last-child {
  gap: 32px;
}

.footer-nav li {
  font-size: 16px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  text-transform: uppercase;
  color: var(--secondary-color);
  cursor: pointer;
}

.footer-social li {
  width: 42px;
  height: 42px;
  background-color: var(--secondary-color);
  border-radius: 100%;
}

.footer-social li i {
  color: #fff;
}
</style>
