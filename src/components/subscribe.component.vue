<template>
  <section class="subscription flex-center" id="services">
    <h2 data-aos="flip-down">Dont Miss Out</h2>
    <p data-aos="fade-up">Sign up for UMAMI BITES newsfeed and get exclusive offers.</p>

    <div class="subscription-form" data-aos="fade-up">
      <input type="text" placeholder="Enter your email address" />
      <button>Get Started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubscribeComponent",
};
</script>

<style scoped>
.subscription {
  padding: 64px;
  background-color: var(--primary-color);
  flex-direction: column;
  overflow: hidden;
}

.subscription h2 {
  font-size: 88px;
  font-family: var(--playfair-display);
  font-weight: 600;
  line-height: 123px;
  color: #fff;
  text-align: center;
}

.subscription p {
  font-size: 18px;
  font-family: var(--plus-jakarta-sans);
  font-weight: 300;
  line-height: 36px;
  margin-top: 32px;
  color: rgba(255, 255, 255, 0.8);
}

.subscription-form {
  min-width: 480px;
  margin-top: 40px;
  padding: 14px 14px 14px 24px;
  display: flex;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 46px;
}

.subscription-form input {
  flex: 1;
  font-size: 16px;
  font-weight: 400px;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
  opacity: 0.5;
  background: transparent;
  border: none;
  outline: none;
}

.subscription-form input::placeholder {
  color: #fff;
  opacity: 0.5;
}

.subscription-form button {
  padding: 20px;
  min-width: 180px;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--plus-jakarta-sans);
  color: #fff;
  text-align: center;
  background: var(--black-400);
  border-radius: 46px;
  border: none;
  outline: none;
  cursor: pointer;
}

@media screen and (max-width: 550px) {
  .subscription {
    padding: 64px 32px;
  }

  .subscription h2 {
    font-size: 68px;
    line-height: 100px;
  }

  .subscription-form {
    flex-direction: column;
    gap: 20px;
    min-width: 100%;
    border-radius: 20px;
    padding: 0;
    border: none;
  }

  .subscription-form input {
    min-height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 10px 20px;
    border-radius: 30px;
  }

  .subscription-form button {
    min-width: 100%;
  }
}
</style>
