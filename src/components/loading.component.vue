<template>
  <div class="loading-content">
    <div class="loading-card">
      <h2 class="loading-header">Welcome to UMAMI BITES!</h2>
      <p class="loading-body">
        This responsive web application is built using Vue.js, AOS, and CSS. Please note,
        it is a demo and not an ordering application. <br />
        Thank you for visiting!
      </p>
      <p class="loading-subheader">- Crystal Fecteau</p>
      <div class="loading-footer">
        <div class="custom-loader"></div>
        <button
          @click="handleEnterClick"
          :disabled="isLoading"
          class="loading-btn"
          :style="{ backgroundColor: buttonColor }"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
  data() {
    return {
      isLoading: true,
      buttonText: "Loading...",
      buttonColor: "#a2a2a2",
    };
  },
  created() {
    this.startTimeout();
  },
  methods: {
    startTimeout() {
      setTimeout(() => {
        this.isLoading = false;
        this.buttonText = "Enter";
        this.buttonColor = "#000";
      }, 3000);
    },
    handleEnterClick() {
      const hasEntered = true;
      this.$emit("hasEntered", hasEntered);
    },
  },
};
</script>

<style scoped>
.loading-content {
  font-family: var(--plus-jakarta-sans);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.loading-card {
  padding: 3rem;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.loading-body {
  margin-top: 2rem;
}

.loading-subheader {
  margin: 1rem 0 2rem;
}
.custom-loader {
  width: 100%;
  height: 22px;
  border-radius: 20px;
  color: var(--primary-color);
  border: 2px solid;
  position: relative;
}

.custom-loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: var(--primary-color);
  animation: fillLoader 3s forwards;
}

.loading-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.loading-btn {
  padding: 10px 30px;
  border-radius: 36px;
  width: fit-content;
  outline: none;
  border: none;
  background: var(--secondary-color);
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}

@keyframes fillLoader {
  100% {
    inset: 0;
  }
}
</style>
