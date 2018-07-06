<template>
  <div>
    <i-load-more />
    <i-load-more tip="暂无数据" :loading="false" />
    <i-load-more :loading="false" />
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleClick () {

      }
    }
  }
</script>

<style lang="less">
</style>
