<template>
  <div>
    <i-panel title="带有文字的按钮"></i-panel>

    <i-page :current="current" total="5" @change="handleChange">
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </i-page>

    <i-panel title="带有文字和图标的按钮"></i-panel>
    <i-page :current="current" total="5" @change="handleChange">
      <view slot="prev">
        <i-icon type="return"></i-icon>
        上一步
      </view>
      <view slot="next">
        下一步
        <i-icon type="enter"></i-icon>
      </view>
    </i-page>
    <i-panel title="隐藏数字"></i-panel>

    <i-page :current="current" total="5" simple @change="handleChange">
      <view slot="prev">Prev</view>
      <view slot="next">Next</view>
    </i-page>

    <i-panel title="只显示数字"></i-panel>

    <i-page :current="current" total="5" mode="number" @change="handleChange"></i-page>

    <i-panel title="显示点"></i-panel>

    <i-page :current="current" total="5" mode="pointer" @change="handleChange"></i-page>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        current: 1
      }
    },
    methods: {
      handleChange ({target}) {
        const type = target.type
        if (type === 'next') {
          this.
            current = this.current + 1
        } else if (type === 'prev') {
          this.current = this.current - 1
        }
      }
    }
  }
</script>

<style lang="less">
</style>
