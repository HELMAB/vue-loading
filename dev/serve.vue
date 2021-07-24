<script>
import Vue from 'vue';
import VuejsLoadingScreen from '@/vuejs-loading-screen.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VuejsLoadingScreen
  }
});
</script>

<template>
  <div id="app">
    <vuejs-loading-screen />
  </div>
</template>
