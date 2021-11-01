import Vue from 'vue';
import Dev from './serve.vue';
import i18n from './i18n';
import IsLoading from '@/entry.esm';

const isLoadingOptions = {
  bg: '#41b883ad',
  slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h3 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> ${ i18n.t('message.loading') }</h3>
    </div>
  `,
  i18n
}

Vue.use(IsLoading, isLoadingOptions);

Vue.config.productionTip = false;
Vue.prototype.isLoadingOptions = isLoadingOptions

new Vue({
  i18n,
  render: (h) => h(Dev),
}).$mount('#app');
