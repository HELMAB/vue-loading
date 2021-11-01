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
  watch: {
    '$i18n.locale' () {
      this.$changeIsLoadingOptions({slot: `
        <div class="px-5 py-3 bg-gray-800 rounded">
          <h3 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> ${ this.$t('message.loading') }</h3>
        </div>
      `})
    }
  }
});
</script>

<template>
  <div id="app">
    <div class="flex justify-center items-center h-screen w-screen">
      <div class="text-center">
        <h3 class="mb-5 text-2xl">Vuejs Loading Screen</h3>
        <div class="space-x-2">
          <button
              class="px-4 py-2 bg-blue-800 rounded text-white"
              @click="showLoading"
          >
            Send HTTP Request {{ $t('message.loading') }}
          </button>
          <button
              class="px-4 py-2 bg-blue-800 rounded text-white"
              @click="() => {$i18n.locale === 'en' ? $i18n.locale = 'km' : $i18n.locale = 'en'}"
          >
            Now Locale is: {{ $i18n.locale }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
</style>
