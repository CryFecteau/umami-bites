<template>
  <section class="trending" id="food">
    <section class="trending-sushi">
      <div class="trending-content" data-aos="fade-right">
        <p class="trending-subtitle">What’s Trending / トレンド</p>
        <h3 class="trending-title">Omakase</h3>
        <p class="trending-description">
          Each Omakase Platter is a culinary journey, meticulously crafted to tantalize
          your taste buds with a harmonious balance of flavors and textures. Our chef's
          expertise and allow them to guide you through an array of exquisite flavors.
        </p>
        <ul class="trending-list flex-between">
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Nigirizushi</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Oshizushi</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Makizushi</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Chirashizushi</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Inarizushi</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Temakizushi</p>
          </li>
        </ul>
      </div>
      <div class="trending-image flex-center">
        <img src="../assets/trend1.png" alt="sushi-5" data-aos="fade-left" />
        <h2 data-aos="fade-up">
          お <br />
          ま <br />
          か <br />
          せ
        </h2>
      </div>
    </section>
    <div class="trending-discover" data-aos="zoom-in">
      <p>Discover</p>
    </div>
    <section class="trending-drinks">
      <div class="trending-image flex-center">
        <img src="../assets/trend2.png" alt="sushi-4" data-aos="fade-right" />
        <h2>
          う<br />
          な<br />
          丼
        </h2>
      </div>
      <div class="trending-content" data-aos="fade-left">
        <p class="trending-subtitle">What’s Trending / トレンド</p>
        <h3 class="trending-title">Unadon</h3>
        <p class="trending-description">
          Celebrate tradition with a modern flair through our Unadon. While honoring the
          time-honored recipe, our chefs infuse their creativity to deliver a contemporary
          twist. The tender eel, expertly grilled and glazed, showcases the perfect
          balance of tradition and innovation.
        </p>
        <ul class="trending-list flex-between">
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Freshwater Eel</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Jasmine Rice</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Tare Sauce</p>
          </li>
          <li>
            <div class="trending-icon flex-center">
              <i class="fas fa-check"></i>
            </div>
            <p>Grilled Over Charcoal</p>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "TrendingComponent",
};
</script>

<style scoped>
.trending {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.trending-discover {
  position: absolute;
  top: 44%;
  left: 44%;
  z-index: 1;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  background-color: var(--secondary-color);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trending-discover p {
  font-size: 18px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  text-transform: uppercase;
  color: #fff;
}

.trending-sushi,
.trending-drinks {
  width: 100%;
  min-height: 640px;
  display: flex;
  flex-direction: row;
}

.trending-content {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px 64px;
}

.trending-list {
  list-style: none;
  flex-wrap: wrap;
  gap: 20px;
}

.trending-list li {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
  min-width: 210px;
}

.trending-icon {
  width: 24px;
  height: 24px;
  color: #fff;
  border-radius: 100%;
  background-color: var(--primary-color);
}

.trending-list p {
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: var(--secondary-color);
}

.trending-image {
  flex: 1;
  position: relative;
  padding: 32px 64px;
  background-color: var(--color-white);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.trending-image h2 {
  padding: 20px;
  font-family: var(--playfair-display);
  font-weight: 700;
  font-size: 120px;
  line-height: 138px;
}
.trending-image img {
  height: 350px;
  object-fit: contain;
  filter: drop-shadow(3px 5px 10px #000000a5);
}

.trending-subtitle {
  font-size: 18px;
  font-weight: 400;
  font-family: var(--plus-jakarta-sans);
  color: var(--primary-color);
  opacity: 0.8;
  letter-spacing: -0.01em;
}

.trending-title {
  font-size: 64px;
  font-weight: 600;
  font-family: var(--playfair-display);
  color: var(--secondary-color);
  margin-top: 16px;
}

.trending-description {
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
  .trending-sushi {
    flex-direction: column;
  }

  .trending-drink {
    flex-direction: column-reverse;
  }

  .trending-image {
    width: 100%;
    background-size: cover;
  }

  .trending-discover {
    display: none;
  }
}

@media screen and (max-width: 550px) {
  .trending-image img {
    width: 70%;
    height: 70%;
  }

  .trending-content {
    padding: 32px;
  }
}
</style>
