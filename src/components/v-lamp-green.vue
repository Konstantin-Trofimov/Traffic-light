<template>
	<div class="v-lamp-green">
		<div class="lamp lamp_red lamp_dim"></div>
		<div class="lamp lamp_yellow lamp_dim"></div>
		<div class="lamp lamp_green"></div>
	</div>
</template>

<script>
	import router from '@/router'
	import {mapActions} from 'vuex'

	export default {
		name: 'v-lamp-green',
		methods: {
			...mapActions([
				'TOGGLE_TIMER'
			]),
			changeLight() {
				setTimeout(()=>{
					router.push({ path: 'yellow' })
				}, 15000)
			}
		},
		mounted () {
			this.changeLight()
			this.TOGGLE_TIMER(15)
		}
	}
</script>