<template>
  <div>
    <i-panel title="基础用法">
      <view style="padding: 16px">
        <i-input-number :value="value1" min="0" max="100" @change="handleChange1"/>
      </view>
    </i-panel>

    <i-panel title="小数">
      <view style="padding: 16px">
        <i-input-number :value="value2" min="0" max="100" step="0.2" @change="handleChange2"/>
      </view>
    </i-panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: 1,
        value2: 0.1
      }
    },
    methods: {
      handleChange1 ({mp}) {
        this.value1 = mp.detail.value
      },
      handleChange2 ({mp}) {
        this.value2 = mp.detail.value
      }
    }
  }
</script>

<style lang="less">
</style>
