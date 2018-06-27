<template>
  <div class="i-index-demo">
    <i-index height="100%">
      <i-index-item
        v-for="(item,index) in cities"
        :key="index"
        :name="item.key"
      >
        <view
          class="i-index-demo-item"
          v-for="(listItem,listIndex) in item.list"
          :key="listIndex"
        >
          {{listItem.name}}
        </view>
      </i-index-item>
    </i-index>
  </div>
</template>

<script>
  import { cities } from './city'

  export default {
    data () {
      return {
        cities: []
      }
    },
    onReady () {
      let storeCity = new Array(26)
      const words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      words.forEach((item, index) => {
        storeCity[index] = {
          key: item,
          list: []
        }
      })
      cities.forEach((item) => {
        let firstName = item.pinyin.substring(0, 1)
        let index = words.indexOf(firstName)
        storeCity[index].list.push({
          name: item.name,
          key: firstName
        })
      })
      this.cities = storeCity
    },
    methods: {}
  }
</script>

<style lang="less">
  .i-index-demo, page {
    width: 100%;
    height: 100%;
  }

  .i-index-demo-item {
    padding: 10px;
    border-bottom: #ddd solid 1 rpx;
    font-size: 14px;
  }
</style>
