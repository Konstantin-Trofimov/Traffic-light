export default {
	methods: {
		signalize() {
			if (this.time < 3) {
				document.querySelector('.active').classList.add('blink')
			}
		}
	},
	updated() {
		this.signalize()
	}
}