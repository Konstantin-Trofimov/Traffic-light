<template>
  <div id="app">
      <!-- <div class="timer">
        <span>0{{ minutes }}</span>
        <span>:</span>
        <span>{{ supportZero }}{{ seconds }}</span>
      </div> -->
    <vMainWrapper/>
  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper'
import router from '@/router'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    vMainWrapper
  },
  
  mounted () {
   
  },
}
</script>

<style lang="scss">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .lamp {
    width: 10rem;
    height: 10rem;
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
      opacity: .5;
    }
  }

  .timer span{
    font-size: 20px;
    font-weight: bold;
  }
</style>
