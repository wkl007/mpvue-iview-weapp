<template>
  <div>
    <view style="margin-top: 100px">
      <i-button type="ghost" @click="handleOpen1">一般用法</i-button>
      <i-button type="ghost" @click="handleOpen2">带有提示、异步</i-button>
    </view>
    <i-action-sheet
      :visible="visible1"
      :actions="actions1"
      show-cancel
      @cancel="handleCancel1"
      @iclick="handleClickItem1"/>

    <i-action-sheet
      :visible="visible2"
      :actions="actions2"
      show-cancel
      @cancel="handleCancel2"
      @iclick="handleClickItem2"
      :mask-closable="false">
      <view slot="header" style="padding: 16px">
        <view style="color: #444;font-size: 16px">确定吗？</view>
        <text>删除后无法恢复哦</text>
      </view>
    </i-action-sheet>

    <i-message id="message"/>
  </div>
</template>

<script>
  const {$Message} = require('../base/index')

  export default {
    data () {
      return {
        visible1: false,
        visible2: false,
        actions1: [
          {
            name: '选项1'
          },
          {
            name: '选项2'
          },
          {
            name: '去分享',
            icon: 'share',
            openType: 'share'
          }
        ],
        actions2: [
          {
            name: '删除',
            color: '#ed3f14'
          }
        ]
      }
    },
    methods: {
      handleOpen1 () {this.visible1 = true},
      handleOpen2 () {this.visible2 = true},
      handleCancel1 () {this.visible1 = false},
      handleCancel2 () {this.visible2 = false},
      handleClickItem1 ({mp}) {
        const index = mp.detail.index + 1
        console.log(index)
        $Message({
          content: '点击了选项' + index
        })
      },
      handleClickItem2 () {
        const action = [...this.actions2]
        action[0].loading = true
        this.actions2 = action

        setTimeout(() => {
          action[0].loading = false
          this.visible2 = false
          this.actions2 = action

          $Message({
            content: '删除成功！',
            type: 'success'
          })
        }, 2000)
      }
    },
    onShareAppMessage (res) {

    }
  }
</script>

<style lang="less">
</style>
