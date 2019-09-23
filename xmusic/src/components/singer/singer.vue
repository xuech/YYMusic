<template>
  <div class="singer" ref="singer">
    <listview :data="singers" ref="list"></listview>
    <router-view></router-view>
  </div>
</template>

<script>
import {getSingerList} from 'api/singer'
import Singer from 'common/js/singer'
import Listview from '../../base/listview/listview'
const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'
export default {
  name: 'singer',
  components: {
    Listview
  },
  data () {
    return {
      singers: []
    }
  },
  methods: {
    getSingerList () {
      getSingerList().then((res) => {
        if (res.code === 0) {
          this.singers = this.normalizeSinger(res.data.list)
        }
      })
    },
    normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        }))
      })
      // 为了得到有序列表，我们需要处理 map
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  mounted () {
    this.getSingerList()
  }

}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
