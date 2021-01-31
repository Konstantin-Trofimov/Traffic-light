<template>
	<div class="v-timer">
        <span>{{ TIMER }}</span>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'v-timer',
		computed: {
			...mapGetters([
				'TIMER',
			]),	
		}	
	}
</script>

<style lang="scss">
	.v-timer {
		margin-top: 2rem;
		text-align: center;

		span {
			font-size: 26px;
			font-weight: bold;
		}
	}
</style>