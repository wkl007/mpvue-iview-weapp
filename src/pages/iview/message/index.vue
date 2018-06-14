<template>
  <div>
    <view style="margin-top: 100px">
      <i-button type="ghost" @click="handleDefault">默认提醒</i-button>
      <i-button type="ghost" @click="handleSuccess">成功提醒</i-button>
      <i-button type="ghost" @click="handleWarning">警告提醒</i-button>
      <i-button type="ghost" @click="handleError">错误提醒</i-button>
      <i-button type="ghost" @click="handleDuration">自定义持续时间</i-button>
    </view>
    <i-message id="message" />
  </div>
</template>

<script>
  const {$Message} = require('../base/index')
  
  export default {
    data () {
      return {}
    },
    methods: {
      handleDefault () {
        $Message({
          content: '这是一条普通提醒'
        });
      },
      handleSuccess () {
        $Message({
          content: '这是一条成功提醒',
          type: 'success'
        });
      },
      handleWarning () {
        $Message({
          content: '这是一条警告提醒',
          type: 'warning'
        });
      },
      handleError () {
        $Message({
          content: '这是一条错误提醒',
          type: 'error'
        });
      },
      handleDuration () {
        $Message({
          content: '我将在 5 秒后消失',
          duration: 5
        });
      }
    }
  }
</script>

<style lang="less">
</style>
