<template>
	<div class="v-lamp-yellow">
		<div class="lamp lamp_red lamp_dim"></div>
		<div class="lamp lamp_yellow"></div>
		<div class="lamp lamp_green lamp_dim"></div>
	</div>
</template>

<script>
	import router from '@/router'
	import {mapGetters, mapActions} from 'vuex'
	
	export default {
		name: 'v-lamp-yellow',
		methods: {
			...mapActions([
				'TOGGLE_TRAFFIC_LIGFT',
				'TOGGLE_TIMER'
			]),
			changeLight() {
				if(this.TRAFFIC) {
					this.switching('green')
				}
				else {
					this.switching('red')
				}
			},
			switching(path) {
				setTimeout(()=>{
						router.push({ path: path })
						this.TOGGLE_TRAFFIC_LIGFT()
				}, 3000)
			}
		},
		computed: {
			...mapGetters([
				'TRAFFIC',
			])
		},
		mounted () {
			this.changeLight()
			this.TOGGLE_TIMER(3)
			
		}
	}
</script>
