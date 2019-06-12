<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <div v-for="(item,index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="(item,index) in discList" :key="index" class="item">
            <div class="icon">
              <img width="60" height="60" :src="item.imgurl">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider'

export default {
  data () {
    return {
      recommends: [],
      discList: []
    }
  },
  created () {
    this._getRecomment()
    this._getDiscList()
  },

  methods: {
    _getRecomment () {
      getRecommend().then((value) => {
        if (value.code === ERR_OK) {
          this.recommends = value.data.slider
          // console.log(value.data)
        }
      })
    },
    _getDiscList () {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
          // console.log(res.data.list)
        }
      })
    }
  },
  components: {
    slider: Slider
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable.styl'
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
  .recommend-list
    .list-title
      padding: 15px 0
      font-size: 14px
      text-align: center
      color: $color-theme
    .item
      display: flex
      align-items: flex-start
      padding: 0 20px 20px 20px
      .icon
        flex: 0 0 60px
        padding-right: 20px
      .text
        display: flex
        flex-direction: column
        font-size: 14px
        line-height: 20px
        overflow: hidden
        .name
          margin-bottom: 10px
          color: $color-text
        .desc
          color: $color-text-d
</style>
