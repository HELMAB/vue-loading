import Loading from './src/Loading'
import 'font-awesome/css/font-awesome.min.css'

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
      vm.options = options
    }
    Vue.prototype.$isLoading = function (isLoading) {
      vm.changeStatus(isLoading)
    }
  }
}
