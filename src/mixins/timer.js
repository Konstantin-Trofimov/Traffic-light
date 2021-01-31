import {
	mapActions,
	mapGetters
} from 'vuex'
import vTimer from '@/components/v-timer'

export default {
	components: {
		vTimer
	},
	methods: {
		...mapActions([
			'TOGGLE_TRAFFIC_LIGFT',
		]),
		updateTimer(path) {
			let timer = setTimeout(() => {
				if (this.time > 0) {
					this.time--
					this.updateTimer(path)
				} else {
					clearTimeout(timer)
					this.$router.push(path)
				}
			}, 1000)
		}
	},
	computed: {
		...mapGetters([
			'TRAFFIC',
		])
	},
	mounted() {
		this.changeLight()
	}
}