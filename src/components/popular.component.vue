<template>
  <section class="popular-foods" id="menu">
    <h2 class="popular-foods-title" data-aos="flip-up">Popular Food / 人気</h2>

    <div class="popular-foods-filters popular-hide-scrollbar" data-aos="fade-up">
      <button class="popular-foods-filter-btn active">Top Picks</button>
      <button class="popular-foods-filter-btn">
        <img src="../assets/popSushi.png" alt="sushi 9" />
        Sushi
      </button>
      <button class="popular-foods-filter-btn">
        <img src="../assets/popSashimi.png" alt="sushi 7" />
        Sashimi
      </button>
      <button class="popular-foods-filter-btn">
        <img src="../assets/popRamen.png" alt="sushi 8" />
        Ramen
      </button>
      <button class="popular-foods-filter-btn">
        <img src="../assets/popTempura.png" alt="sushi 6" />
        Tempura
      </button>
      <button class="popular-foods-filter-btn">More...</button>
    </div>

    <div class="popular-foods-catalogue" data-aos="fade-up">
      <article class="popular-foods-card">
        <img
          class="popular-foods-card-image"
          src="../assets/pop1.png"
          alt="sushi-12"
          style="height: 115px"
        />
        <h4 class="popular-foods-card-title">Tofu Bento</h4>

        <div class="popular-foods-card-details flex-between">
          <div class="popular-foods-card-rating">
            <i class="fas fa-star"></i>
            <p>4.9</p>
          </div>

          <p class="popular-foods-card-price">$11.99</p>
        </div>
      </article>

      <article class="popular-foods-card active-card">
        <img class="popular-foods-card-image" src="../assets/pop3.png" alt="sushi-11" />
        <h4 class="popular-foods-card-title">Chicken Yakisoba</h4>

        <div class="popular-foods-card-details flex-between">
          <div class="popular-foods-card-rating">
            <i class="fas fa-star"></i>
            <p>5.0</p>
          </div>

          <p class="popular-foods-card-price">$11.99</p>
        </div>
      </article>

      <article class="popular-foods-card">
        <img
          class="popular-foods-card-image"
          src="../assets/pop2.png"
          alt="sushi-10"
          style="height: 100px"
        />
        <h4 class="popular-foods-card-title">Snow Crab Sushi</h4>

        <div class="popular-foods-card-details flex-between">
          <div class="popular-foods-card-rating">
            <i class="fas fa-star"></i>
            <p>4.7</p>
          </div>

          <p class="popular-foods-card-price">$7.99</p>
        </div>
      </article>
    </div>

    <button class="popular-foods-button">
      Explore Food
      <i class="fas fa-chevron-right"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: "PopularComponent",
};
</script>

<style scoped>
.popular-foods {
  padding: 64px;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}

.popular-foods-title {
  font-size: 56px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 78px;
  color: #fff;
  text-align: center;
}

.popular-foods-filters {
  margin-top: 48px;
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  gap: 24px;
}

.popular-foods-filter-btn {
  padding: 10px 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 46px;
  font-size: 16px;
  font-weight: 300px;
  line-height: 25px;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
  cursor: pointer;
}

.popular-foods-filter-btn img {
  filter: drop-shadow(3px 5px 10px #000000a5);
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.popular-foods-filter-btn.active {
  background: #fff;
  color: var(--primary-color);
}

.popular-foods-filter-btn:hover {
  background: #fff;
  color: var(--primary-color);
}

.popular-foods-catalogue {
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 56px;
}

.popular-foods-button {
  width: fit-content;
  padding: 20px 30px;
  margin: 80px auto 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
  border: none;
  outline: none;
  background: var(--secondary-color);
  border-radius: 64px;
  cursor: pointer;
}

.popular-foods-button img {
  filter: drop-shadow(3px 5px 10px #000000a5);
  width: 14px;
  height: 14px;
  object-fit: contain;
  margin-left: 21px;
}

.popular-foods-card {
  padding: 38px;
  min-width: 260px;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 36px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.popular-foods-card-image {
  filter: drop-shadow(3px 5px 10px #000000a5);
  object-fit: contain;
}

.popular-foods-card-title {
  margin-top: 47px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  font-family: var(--playfair-display);
  color: #fff;
  text-align: center;
}

.popular-foods-card-details {
  width: 100%;
  margin-top: 32px;
}

.popular-foods-card-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.popular-foods-card-rating i {
  color: gold;
}

.popular-foods-card-rating p {
  font-size: 20px;
  font-weight: 300;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
}

.popular-foods-card-price {
  font-size: 20px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
}

.popular-foods-card.active-card {
  background: #fff;
  min-width: 340px;
}

.popular-foods-card.active-card .popular-foods-card-image {
  filter: drop-shadow(3px 5px 10px #000000a5);
  width: 214px;
  height: 160px;
}

.popular-foods-card.active-card .popular-foods-card-title {
  color: var(--black-500);
  font-size: 32px;
}

.popular-foods-card.active-card .popular-foods-card-rating img {
  width: 32px;
  height: 32px;
}

.popular-foods-card.active-card .popular-foods-card-rating p {
  font-size: 24px;
  color: var(--gray-100);
}

.popular-foods-card.active-card .popular-foods-card-price {
  font-size: 24px;
  color: var(--secondary-color);
}
.popular-hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.popular-hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media screen and (max-width: 550px) {
  .popular-foods {
    padding: 64px 32px;
  }

  .popular-foods-card,
  .popular-foods-card.active-card {
    min-width: 100%;
  }
}
</style>
