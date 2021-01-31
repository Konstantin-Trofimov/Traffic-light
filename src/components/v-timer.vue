<template>
	<div class="v-timer">
        <span>{{ seconds }}</span>
	</div>
</template>

<script>
	export default {
		name: 'v-timer',
		props: {
			seconds: {
				type: Number,
				defualt: 3
			}
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