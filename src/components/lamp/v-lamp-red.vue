<template>
	<div class="v-lamp-red">
		<div class="lamp lamp_red active"></div>
		<div class="lamp lamp_yellow lamp_dim"></div>
		<div class="lamp lamp_green lamp_dim"></div>

		<vTimer :seconds="time"/>
	</div>
</template>

<script>
	import timer from '@/mixins/timer'
	import blinker from '@/mixins/blinker'

	export default {
		name: 'v-lamp-red',
		data() {
			return {
				time: 10
			}
		},
		mixins: [timer, blinker],
		methods: {
			changeLight() {
				this.updateTimer('yellow')
				if(!this.TRAFFIC) {
					this.TOGGLE_TRAFFIC_LIGFT()
				}
			}
		},
		mounted () {
			this.changeLight()	
		}
	}
</script>