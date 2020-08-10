import indexVue from './index.vue'
import 'font-awesome/css/font-awesome.min.css'

export default {
    install(Vue, options) {
        var myPluginVue = Vue.extend(indexVue)
        var vm = new myPluginVue({
            data: {
                isLoading: false
            }
        }).$mount()

        document.body.appendChild(vm.$el)

        Vue.prototype.$isLoading = function (isLoading) {
            vm.changeStatus(isLoading)
        }

        Vue.mixin({
            created() {
                if (options!==null && options !== undefined) {
                    if (options.hasOwnProperty('bg')) {
                        vm.bg = options.bg
                    }
                    if (options.hasOwnProperty('icon')) {
                        vm.icon = options.icon
                    }
                    if (options.hasOwnProperty('size')) {
                        vm.size = options.size
                    }
                    if (options.hasOwnProperty('icon_color')) {
                        vm.icon_color = options.icon_color
                    }
                    if (options.hasOwnProperty('slot')) {
                        vm.slot = options.slot
                    }
                }
            }
        })
    }
}
