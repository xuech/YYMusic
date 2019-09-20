<template>
  <div>
    推荐
  </div>
</template>

<script>
import { getRecommend } from '../../api/recommend'

export default {
  name: 'recommend',
  data () {
    return {}
  },
  methods: {
    getData () {
      getRecommend().then((res) => {
        if (res.code === 0) {
          console.log(res.data.slider)
        }
      })
    }
  },
  mounted () {
    this.getData()
  }

}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

</style>
