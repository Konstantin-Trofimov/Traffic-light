<template>
	<div class="v-lamp-green">
		<div class="lamp lamp_red lamp_dim"></div>
		<div class="lamp lamp_yellow lamp_dim"></div>
		<div class="lamp lamp_green active"></div>

		<vTimer :seconds="time"/>
	</div>
</template>

<script>
	import timer from '@/mixins/timer'
	import blinker from '@/mixins/blinker'

	export default {
		name: 'v-lamp-green',
		data() {
			return {
				time: 17
			}
		},
		mixins: [timer, blinker],
		methods: {
			changeLight() {
				this.updateTimer('yellow')
			},
		},
		mounted () {
			this.changeLight()
			
		}
	}
</script>