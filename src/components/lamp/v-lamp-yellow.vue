<template>
	<div class="v-lamp-yellow">
		<div class="lamp lamp_red lamp_dim"></div>
		<div class="lamp lamp_yellow active"></div>
		<div class="lamp lamp_green lamp_dim"></div>
		
		<vTimer :seconds="time"/>
	</div>
</template>

<script>
	import timer from '@/mixins/timer'
	
	export default {
		name: 'v-lamp-yellow',
		data() {
			return {
				time: 3
			}
		},
		mixins: [timer],
		methods: {
			changeLight() {
				if(this.TRAFFIC) {
					this.switchTraffic('green')
				}
				else {
					this.switchTraffic('red')
				}
			},
			switchTraffic(color) {
				this.updateTimer(color)
				this.TOGGLE_TRAFFIC_LIGFT()
			}
		}
	}
</script>
