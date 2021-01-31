<template>
	<div class="v-lamp-red">
		<div class="lamp lamp_red"></div>
		<div class="lamp lamp_yellow lamp_dim"></div>
		<div class="lamp lamp_green lamp_dim"></div>
	</div>
</template>

<script>
	import router from '@/router'
	import {mapActions} from 'vuex'

	export default {
		name: 'v-lamp-red',
		methods: {
			...mapActions([
				'TOGGLE_TIMER'
			]),
			changeLight() {
				setTimeout(()=>{
					router.push({ path: 'yellow' })
				}, 11000)
			}
		},
		mounted () {
			this.changeLight()
			this.TOGGLE_TIMER(11)
		}
	}
</script>