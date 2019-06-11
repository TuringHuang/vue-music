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
      <div class="recommend-list"></div>
    </div>
  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider'

export default {
  data () {
    return {
      recommends: []
    }
  },
  created () {
    this._getRecomment()
  },

  methods: {
    _getRecomment () {
      getRecommend().then((value) => {
        if (value.code === ERR_OK) {
          this.recommends = value.data.slider
          // console.log(value.data)
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
</style>
