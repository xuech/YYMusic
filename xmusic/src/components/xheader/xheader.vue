<template>
  <div class="headerClass">

  </div>
</template>

<script>
export default {
  name: 'xheader',
  data () {
    return {}
  },
  methods: {},
  mounted () {

  }

}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
.headerClass
  position relative
  height 44px
  text-align center
  color $color-theme
  font-size 0
</style>
