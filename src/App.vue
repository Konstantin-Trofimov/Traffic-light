<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		mounted () {
			if (this.$route.path == '/') {
				this.$router.push('yellow')
			}
		}  
	}	
</script>

<style lang="scss">

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		padding-top: 3rem;
	}

	.lamp {
		width: 12rem;
		height: 12rem;
		margin: 0 auto;
		border: 2px solid #aeaeae;
		border-radius: 50%;
		margin-bottom: 2px;

		&_green {
			background: green;
		}

		&_red {
			background: red;
		}

		&_yellow {
			background: yellow;
		}

		&_dim {
			opacity: .3;
		}
	}

	.blink {
		animation-name: blinker;
		animation-iteration-count: infinite;
		animation-timing-function: cubic-bezier(1.0,0,0,1.0);
		animation-duration: 1s;
		-webkit-animation-name: blinker;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
		-webkit-animation-duration: 1s;
	}
		
	@keyframes blinker {
		from { opacity: 1.0; }
		to { opacity: 0.0; }
	}
		
	@-webkit-keyframes blinker {
		from { opacity: 1.0; }
		to { opacity: 0.0; }
	}
</style>
