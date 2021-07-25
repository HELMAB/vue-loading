import Loading from './lib-components/Loading.vue'

export default {
  install(Vue, options) {
    const myPluginVue = Vue.extend(Loading)
    const vm = new myPluginVue({
      data: {
        isLoading: false
      }
    }).$mount()

    document.body.appendChild(vm.$el)
    if (options) {
      Object.keys(options).forEach((key) => {
        if (options[key]) {
          vm.options[key] = options[key]
        }
      })
    }
    Vue.prototype.$isLoading = function (isLoading) {
      vm.changeStatus(isLoading)
    }
  }
}