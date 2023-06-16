<template>
  <section class="hero">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <div class="hero-image">
      <img src="../assets/heroImg.png" alt="sushi" data-aos="fade-up" />
      <h2 data-aos="fade-up">
        日 <br />
        本 <br />
        食
      </h2>
      <div class="hero-image-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-content-info" data-aos="fade-left">
        <h1>Noodles, Broth, and Joy</h1>
        <p>Discover the flavors of authentic Japanese delights at Umami Bites</p>
        <div class="hero-content-buttons">
          <button class="hero-content-order-button">Order Now</button>
          <button class="hero-content-visit-button">
            <i class="fas fa-store-alt"></i>
            Visit Store
          </button>
        </div>
      </div>
      <div class="hero-content-testimonial" data-aos="fade-up">
        <div class="hero-content-customer flex-center">
          <h4>35<span>k+</span></h4>
          <p>Happy Customers</p>
        </div>
        <div class="hero-content-review">
          <img src="../assets/user.png" alt="user" />
          <p>
            "I am blown away by the exceptional service and outstanding food quality
            provided by Umami Bites. The presentation of the dishes was visually stunning,
            and the taste was even more remarkable. The care they put into every order
            truly shines through."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
.hero {
  display: flex;
  min-height: calc(100vh - 74px);
  overflow: hidden;
}

.hero-image {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
}

.hero-image img {
  width: 120%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(3px 5px 10px #000000a5);
}

.hero-image-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  background-color: var(--primary-color);
  z-index: -1;
}

.hero-image h2 {
  position: absolute;
  bottom: 0;
  padding: 20px;
  font-family: var(--playfair-display);
  font-weight: 700;
  font-size: 120px;
  line-height: 138px;
  color: #fff;
}

.hero-content {
  flex: 1.22;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.hero-content-info {
  padding: 64px;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero-content-info h1 {
  font-size: 80px;
  font-weight: 600px;
  font-family: var(--playfair-display);
  color: var(--secondary-color);
}

.hero-content-info p {
  margin: 32px 0 0 32px;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  font-size: 18px;
  font-weight: 400;
}

.hero-content-buttons {
  margin: 41px 0 0 41px;
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
}

.hero-content-order-button {
  padding: 20px;
  border-radius: 36px;
  min-width: 212px;
  outline: none;
  border: none;
  background: var(--secondary-color);
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}

.hero-content-visit-button {
  padding: 20px;
  border-radius: 36px;
  min-width: 212px;
  background: transparent;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content-visit-button i {
  margin-right: 0.5rem;
}

.hero-content-testimonial {
  padding: 32px 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: var(--color-white);
}

.hero-content-customer {
  flex: 1;
  gap: 10px;
}

.hero-content-customer h4 {
  font-size: 62px;
  font-weight: 400;
  font-family: var(--playfair-display);
}

.hero-content-customer p {
  font-size: 16px;
  font-weight: 400;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  opacity: 0.5;
}

.hero-content-review {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
  border-left: 1px solid rgba(2, 2, 2, 0.1);
  min-width: 200px;
}

.hero-content-review img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.hero-content-review p {
  font-size: 12px;
  font-weight: 400;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
  opacity: 0.8;
}
@media screen and (max-width: 1060px) {
  .hero {
    flex-direction: column;
  }

  .hero-image img {
    margin-top: 1rem;
    width: 80%;
    transform: matrix(1, 0.05, 0, 1.1, 0, 0) !important;
  }
}

@media screen and (max-width: 750px) {
  .hero-image h2 {
    font-size: 70px;
    line-height: 90px;
  }
}

@media screen and (max-width: 550px) {
  .hero-image h2 {
    font-size: 40px;
    line-height: 60px;
  }

  .hero-content-info {
    padding: 32px;
  }

  .hero-content-info h1 {
    font-size: 60px;
  }

  .hero-content-info p {
    margin: 32px 0;
  }

  .hero-content__buttons {
    margin: 41px 0;
  }

  .hero-content__testimonial {
    padding: 32px;
  }
}
</style>
