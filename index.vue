<template>
	<div class="loading" v-show="isLoading">
		<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
		<span class="sr-only">Loading...</span>
	</div>
</template>

<script>
	export default {
		name: 'VuejsLoadingScreen',
		data () {
			return {
				isLoading: false
			}
		},
		methods : {
			changeStatus ( isLoading ){
				this.isLoading = isLoading
			}
		}
	}
</script>

<style scoped>
  .loading{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: 99999 !important;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .loading i {
    position: absolute;
    opacity: 1;
    left: 48vw;
    top: 48vh;
  }
</style>