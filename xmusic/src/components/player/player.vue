<template>
    <div class="player" v-show="playlist.length>0">
      <div class="normal-player" v-show="fullScreen">
        xx
      </div>
      <div class="mini-player" v-show="!fullScreen"></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'player',
  data () {
    return {}
  },
  methods: {},
  mounted () {

  },
  computed: {
    ...mapGetters([
      'fullScreen',
      'playlist'
    ])
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .player
    .normal-player
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      z-index 150
      background $color-background

</style>
