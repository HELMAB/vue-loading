import indexVue from './index.vue';

function plugin( Vue, options ){
	
	var myPluginVue = Vue.extend( indexVue );
	var vm = new myPluginVue({
		data: {
			isLoading: false
		}
	}).$mount();
	// document.getElementById( 'app' ).appendChild( vm.$el );
	document.body.appendChild(vm.$el);

	Vue.prototype.$isLoading = function( isLoading ){
        vm.changeStatus( isLoading );
	}

	// Vue.prototype.$isLoading = function(){
	// 	vm.changeStatus( isLoading );	
	// }
}

export default plugin;