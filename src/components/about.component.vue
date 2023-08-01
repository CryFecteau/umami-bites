<template>
  <section class="about-us" id="about-us">
    <div class="about-us-image">
      <div class="about-us-imageTop">
        <img src="../assets/about1.png" alt="sushi" data-aos="fade-right" />
        <h2 data-aos="fade-left">
          新 <br />
          鮮
        </h2>
      </div>
      <button class="about-us-button">
        Learn More
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="about-us-imageBottom">
        <img src="../assets/about2.png" alt="sushi" data-aos="fade-right" />
        <h2 data-aos="fade-left">
          旨<br />
          い
        </h2>
      </div>
    </div>
    <div class="about-us-content" data-aos="fade-left">
      <p class="about-us-subtitle">About Us / 私たちに関しては</p>
      <h3 class="about-us-title">Our Passion for Quality Ingredients</h3>
      <p class="about-us-description">
        We believe that exceptional food starts with exceptional ingredients. That's why
        we source the freshest, highest quality produce, seafood, and meats for our
        dishes. Every ingredient is carefully selected to ensure that every bite at UMAMI
        BITES is a delight to your taste buds.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
.about-us {
  display: flex;
  min-height: 720px;
  overflow: hidden;
}

.about-us-image {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-white);
  position: relative;
}

.about-us-image div {
  padding: 32px 64px;
  flex: 1;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.about-us-imageTop {
  border-bottom: 8px solid var(--color-creamson);
}

.about-us-imageTop h2 {
  padding: 20px;
  font-family: var(--playfair-display);
  font-weight: 700;
  font-size: 120px;
  line-height: 138px;
}

.about-us-imageBottom h2 {
  padding: 20px;
  margin-left: 1.2rem;
  font-family: var(--playfair-display);
  font-weight: 700;
  font-size: 120px;
  line-height: 138px;
}

.about-us-imageTop img {
  filter: drop-shadow(3px 5px 10px #000000a5);
  height: 275px;
}

.about-us-imageBottom img {
  filter: drop-shadow(3px 5px 10px #000000a5);
  height: 300px;
}

.about-us-button {
  position: absolute;
  right: 0;
  padding: 12px 32px;
  min-height: 64px;
  background: var(--secondary-color);
  border-radius: 32px 0 0 32px;
  border: 0;
  outline: 0;
  color: #fff;
  font-family: var(--plus-jakarta-sans);
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
}

.about-us i {
  margin-left: 1rem;
}
.about-us-button img {
  object-fit: contain;
  margin-left: 32px;
}

.about-us-content {
  padding: 64px;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.about-us-subtitle {
  font-size: 18px;
  font-weight: 400;
  font-family: var(--plus-jakarta-sans);
  color: var(--primary-color);
  opacity: 0.8;
  letter-spacing: -0.01em;
}

.about-us-title {
  font-size: 64px;
  font-weight: 600;
  font-family: var(--playfair-display);
  color: var(--secondary-color);
  margin-top: 16px;
}

.about-us-description {
  font-size: 18px;
  font-weight: 400;
  font-family: var(--plus-jakarta-sans);
  line-height: 36px;
  letter-spacing: -0.01em;
  color: var(--secondary-color);
  opacity: 0.8;
  margin: 32px 0px;
}
@media screen and (max-width: 1024px) {
  .about-us {
    flex-direction: column;
  }

  .about-us-image {
    flex-direction: row;
  }

  .about-us-imageTop {
    border-bottom: none;
    border-right: 8px solid var(--color-creamson);
  }

  .about-us-button {
    display: none;
  }
}

@media screen and (max-width: 750px) {
  .about-us-image {
    flex-direction: column;
  }

  .about-us-imageTop {
    border-bottom: 8px solid var(--color-creamson);
    border-right: none;
  }

  .about-us-button {
    display: block;
    top: 47%;
  }
}

@media screen and (max-width: 550px) {
  .about-us-imageBottom img,
  .about-us-imageTop img {
    width: 50%;
    height: 160px;

    object-fit: contain;
  }

  .about-us-image div {
    padding: 32px;
  }

  .about-us-button {
    top: 44%;
  }

  .about-us-content {
    padding: 32px;
  }
}
</style>
