<template>
	<div class="v-main-wrapper">
		<router-view/>
		<vTimer/>
	</div>
</template>

<script>
	import vTimer from './v-timer'
	
	
	export default {
		name: 'v-main-wrapper',
		components: {
			vTimer
		},
		
	}
</script>

<style>
	.v-main-wrapper {
		margin-top: 5rem;
	}
</style>