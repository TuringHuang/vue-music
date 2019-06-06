<template>
  <div>推荐页面</div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  created () {
    this._getRecomment()
  },
  methods: {
    _getRecomment () {
      getRecommend().then((value) => {
        if (value.code === ERR_OK) {
          console.log(value.data.slider)
        }
      })
    }
  }
}
</script>

<style>
</style>
