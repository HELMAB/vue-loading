<script>
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
  methods: {
    async showLoading() {
      this.$isLoading(true);
      await this.pause();
      this.$isLoading(false);
    },
    pause(milliseconds = 3600) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    },
  },
});
</script>

<template>
  <div id="app">
    <div class="flex justify-center items-center h-screen w-screen">
      <div class="text-center">
        <h3 class="mb-5 text-2xl">Vuejs Loading Screen</h3>
        <button
          class="px-4 py-2 bg-blue-800 rounded text-white"
          @click="showLoading"
        >
          Send HTTP Request
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
</style>
