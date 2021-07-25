<template>
  <div
    class="loading"
    :style="`background-color: ${options.bg};`"
    v-show="isLoading"
  >
    <template v-if="options.slot">
      <div v-html="options.slot"></div>
    </template>
    <template v-else>
      <i
        class="fa-spin"
        :class="`${options.icon} fa-${options.size}x`"
        :style="`color: ${options.icon_color}`"
      ></i>
      <span class="sr-only">Loading...</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "VueLoading",
  data() {
    return {
      isLoading: false,
      options: {
        bg: "#41b883ad",
        icon: "fas fa-spinner",
        size: "3",
        icon_color: "#ffffff",
        slot: null,
      },
    };
  },
  methods: {
    changeStatus(isLoading) {
      this.isLoading = isLoading;
    },
  },
};
</script>

<style scoped>
@import "./../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 99999 !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading i {
  position: absolute;
  opacity: 1;
}
</style>