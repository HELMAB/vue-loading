<template>
	<div class="loading" v-show="isLoading">
		<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		<span class="sr-only">Loading...</span>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				isLoading: false
			}
		},
		methods : {
			changeStatus: function( isLoading ){
				this.isLoading = isLoading;
			}
		}
	}
</script>