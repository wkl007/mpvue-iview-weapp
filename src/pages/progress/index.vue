<template>
  <div>
    <view class="progress-item">
      <i-progress percent="25"></i-progress>
      <i-progress percent="45" status="active"></i-progress>
      <i-progress percent="65" status="wrong"></i-progress>
      <i-progress percent="100" status="success"></i-progress>
      <i-progress percent="25" hide-info></i-progress>
    </view>
    <view class="progress-item">
      <i-progress :percent="percent" :status="status"></i-progress>
      <i-button @click="handleAdd" type="ghost">增加</i-button>
      <i-button @click="handleReduce" type="ghost">减少</i-button>
    </view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        percent: 0,
        status: 'normal'
      }
    },
    methods: {
      handleAdd () {
        if (this.percent === 100) return
        this.percent = this.percent + 10
        if (this.percent === 100) {
          this.status = 'success'
        }
      },
      handleReduce () {
        if (this.percent === 0) return
        this.percent = this.percent - 10
        this.status = -'normal'
      }
    }
  }
</script>

<style lang="less">
  .progress-item {
    padding: 12px;
  }
</style>
