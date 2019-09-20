<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="(item,index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img class="needsclick" :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li @click="selectItem(item)" v-for="(item,indx) in discList" :key="indx" class="item">
            <div class="icon">
              <img width="60" height="60" :src="item.imgurl"/>
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getRecommend, getDiscList} from '../../api/recommend'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'

export default {
  name: 'recommend',
  components: {
    Slider,
    Scroll
  },
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  methods: {
    getData () {
      getRecommend().then((res) => {
        if (res.code === 0) {
          this.recommends = res.data.slider
        }
      })
      getDiscList().then((res) => {
        console.log(res)
        if (res.code === 0) {
          this.discList = res.data.list
        }
      })
    },
    selectItem () {}
  },
  mounted () {
    this.getData()
  }

}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .recommend
    /*position fixed*/
    width 100%
    top 88px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color white
        .item
          display flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px
          .icon
            flex 0 0 60px
            width 60px
            padding-right 20px
          .text
            display flex
            flex-direction column
            justify-content center
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium
            .name
              margin-bottom 10px
              color $color-text
            .desc
              color $color-text-d
      .loading-container
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
