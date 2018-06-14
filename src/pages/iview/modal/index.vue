<template>
  <div>
    <view style="margin-top: 100px;">
      <i-button @click="handleOpen1">普通对话框</i-button>
      <i-button @click="handleOpen2">无标题对话框</i-button>
      <i-button @click="handleOpen3">自定义按钮对话框</i-button>
      <i-button @click="handleOpen4">纵向按钮，自定义颜色及图标</i-button>
      <i-button @click="handleOpen5">异步操作</i-button>
    </view>
    <i-modal title="标题" :visible="visible1" @ok="handleClose1" @cancel="handleClose1">
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
      <view>一些文本</view>
    </i-modal>

    <i-modal :visible="visible2" @ok="handleClose2" @cancel="handleClose2">
      <view>这是一个无标题的对话框</view>
    </i-modal>

    <i-modal title="支付" :visible="visible3" :actions="actions3" @iclick="handleClick3">
      <view>请选择支付方式</view>
    </i-modal>

    <i-modal title="纵向排列的按钮" :visible="visible4" :actions="actions4" :action-mode="vertical"
             @iclick="handleClick4">
    </i-modal>

    <i-modal title="删除确认" :visible="visible5" :actions="actions5" @iclick="handleClick5">
      <view>删除后无法恢复哦</view>
    </i-modal>

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
        visible3: false,
        visible4: false,
        visible5: false,
        actions3: [
          {
            name: '现金支付',
            color: '#2d8cf0'
          },
          {
            name: '微信支付',
            color: '#19be6b'
          },
          {
            name: '取消'
          }
        ],
        actions4: [
          {
            name: '按钮1'
          },
          {
            name: '按钮2',
            color: '#ff9900'
          },
          {
            name: '按钮3',
            icon: 'search'
          }
        ],
        actions5: [
          {
            name: '取消'
          },
          {
            name: '删除',
            color: '#ed3f14',
            loading: false
          }
        ]
      }
    },
    methods: {
      handleOpen1 () {
        this.visible1 = true
      },
      handleClose1 () {
        this.visible1 = false
      },
      handleOpen2 () {
        this.visible2 = true
      },
      handleClose2 () {
        this.visible2 = false
      },
      handleOpen3 () {
        this.visible3 = true
      },
      handleClick3 ({mp}) {
        const index = mp.detail.index

        if (index === 0) {
          $Message({
            content: '点击了现金支付'
          })
        } else if (index === 1) {
          $Message({
            content: '点击了微信支付'
          })
        }
        this.visible3 = false
      },
      handleOpen4 () {
        this.visible4 = true
      },
      handleClick4 () {
        this.visible4 = false
      },
      handleOpen5 () {
        this.visible5 = true
      },
      handleClick5 ({mp}) {
        if (mp.detail.index === 0) {
          this.visible5 = false
        } else {
          const action = [...this.actions5]
          action[1].loading = true
          this.actions5 = action
          setTimeout(() => {
            action[1].loading = false
            this.actions5 = action
            this.visible5 = false
            $Message({
              content: '删除成功！',
              type: 'success'
            })
          }, 2000)
        }
      }

    }
  }
</script>

<style lang="less">
</style>
