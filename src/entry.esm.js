import Loading from './lib-components/Loading.vue'

export default {
  install(Vue, options) {
    const myPluginVue = Vue.extend(Loading)

    Vue.prototype.$isLoading = (isLoading) => {
      vm.changeStatus(isLoading)
    }

    Vue.prototype.$changeIsLoadingOptions = (newOptions) => {
      vm.changeIsLoadingOptions(newOptions)
    }

    const vm = new myPluginVue({
      data() {
        return {
          isLoading: false
        }
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
  }
}
