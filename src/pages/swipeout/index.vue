<template>
  <view class="i-swipeout-demo">
    <view class="i-swipeout-demo-title">基础用法</view>
    <view class="i-swipeout-demo-des">
      注: 1、设置uncloseable为true时点击按钮不能关闭,必须联合toggle2来实现
      2、如果传递action的话必须传递width来设置每个按钮的宽度
    </view>
    <i-swipeout
      i-class="i-swipeout-demo-item"
      @change="change"
      :actions="actions">
      <view slot="content">
        <i-cell
          i-class="i-cell-padding"
          title="猛虫过江"
          label="侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有四年">
        </i-cell>
      </view>
    </i-swipeout>

    <i-swipeout
      i-class="i-swipeout-demo-item"
      :actions="actions"
      :toggle="toggle2"
      :unclosable="true">
      <view slot="content">
        <i-cell
          i-class="i-cell-padding"
          title="点击按钮不可关闭"
          label="侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有四年">
        </i-cell>
      </view>
    </i-swipeout>

    <i-swipeout
      i-class="i-swipeout-demo-item"
      :actions="actions"
      :toggle="toggle2"
      :unclosable="true"
      @change="handlerCloseButton">
      <view slot="content">
        <i-cell
          i-class="i-cell-padding"
          title="可点击按钮关闭"
          label="侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有四年">
        </i-cell>
      </view>
    </i-swipeout>

    <view class="i-swipeout-demo-title">自定义右侧Button</view>
    <view class="i-swipeout-demo-des">注: 右侧必须设置固定宽度。默认宽度160px</view>

    <i-swipeout
      i-class="i-swipeout-demo-item"
      :operateWidth="210">
      <view slot="content">
        <i-cell
          i-class="i-cell-padding"
          title="猛虫过江"
          label="侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有四年">
        </i-cell>
      </view>
      <view slot="button" class="i-swipeout-demo-button-group">
        <view class="i-swipeout-demo-button">点赞</view>
        <view class="i-swipeout-demo-button">分享</view>
        <view class="i-swipeout-demo-button">删除</view>
      </view>
    </i-swipeout>

    <i-swipeout
      i-class="i-swipeout-demo-item"
      :operateWidth="180">
      <view slot="content">
        <i-cell
          i-class="i-cell-padding"
          title="猛虫过江"
          label="侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有四年">
        </i-cell>
      </view>
      <view slot="button" class="i-swipeout-demo-button-group" style="background:#2db7f5;">
        <view class="i-swipeout-demo-button" style="width:60px">
          <i-icon size="32" type="like_fill"></i-icon>
        </view>
        <view class="i-swipeout-demo-button" style="width:60px">
          <i-icon size="32" type="share_fill"></i-icon>
        </view>
        <view class="i-swipeout-demo-button" style="width:60px">
          <i-icon size="32" type="delete_fill"></i-icon>
        </view>
      </view>
    </i-swipeout>

    <view class="i-swipeout-demo-title">和actionsheet联合使用</view>

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

    <i-swipeout
      i-class="i-swipeout-demo-item"
      :operateWidth="180"
      :unclosable="true"
      :toggle="toggle">
      <view slot="content">
        <view class="i-swipeout-image">
          <i-icon size="20" color="#FFFFFF" type="feedback_fill"></i-icon>
        </view>
        <view class="i-swipeout-des">
          <view class="i-swipeout-des-h2">第七个小矮人</view>
          <view class="i-swipeout-des-detail">乐观善良的7个小矮人原本过着简单快乐的生活，不料诅咒公主的巫婆利用小矮人进入.</view>
        </view>
      </view>
      <view slot="button" class="i-swipeout-demo-button-group" style="background:#2db7f5;">
        <view class="i-swipeout-demo-button" style="width:60px" @click="actionsTap">
          <i-icon size="32" type="like_fill"></i-icon>
        </view>
        <view class="i-swipeout-demo-button" style="width:60px" @click="actionsTap">
          <i-icon size="32" type="share_fill"></i-icon>
        </view>
        <view class="i-swipeout-demo-button" style="width:60px" @click="actionsTap">
          <i-icon size="32" type="delete_fill"></i-icon>
        </view>
      </view>
    </i-swipeout>

    <view class="i-swipeout-demo-title">自定义样式</view>

    <i-swipeout
      i-class="i-swipeout-demo-item"
      :actions="actions">
      <view slot="content">
        <view class="i-swipeout-image" style="background:#ff9900;">
          <i-icon size="20" color="#FFFFFF" type="coupons_fill"/>
        </view>
        <view class="i-swipeout-des">
          <view class="i-swipeout-des-h2">第七个小矮人</view>
          <view class="i-swipeout-des-detail">乐观善良的7个小矮人原本过着简单快乐的生活，不料诅咒公主的巫婆利用小矮人进入.</view>
        </view>
      </view>
    </i-swipeout>
  </view>
</template>

<script>
  const {$Message} = require('../base/index')

  export default {
    data () {
      return {
        visible2: false,
        //小程序没有refs，所以只能用动态布尔值控制关闭
        toggle: false,
        toggle2: false,
        actions2: [
          {
            name: '删除',
            color: '#ed3f14'
          }
        ],
        actions: [
          {
            name: '喜欢',
            color: '#fff',
            fontsize: '20',
            width: 100,
            icon: 'like',
            background: '#ed3f14'
          },
          {
            name: '返回',
            width: 100,
            color: '#80848f',
            fontsize: '20',
            icon: 'undo'
          }
        ]
      }
    },

    methods: {
      change ({mp}) {
        const detail = mp.detail
        console.log(detail.index)
      },
      handleCancel2 () {
        this.visible2 = false
        this.toggle = this.toggle ? false : true
      },
      handleClickItem2 () {
        const action = [...this.actions2]
        action[0].loading = true
        this.actions2 = action

        setTimeout(() => {
          action[0].loading = false
          this.visible2 = false
          this.actions2 = action
          this.toggle = this.toggle ? false : true
        }, 2000)
      },
      handlerCloseButton () {
        this.toggle2 = this.toggle2 ? false : true
      },
      actionsTap () {
        this.visible2 = true
      }
    }
  }
</script>

<style lang="less">
  .i-swipeout-demo-item {
    border-bottom: #333 solid 1px;
  }

  .i-cell-padding {
    padding: 5px 0px !important;
    font-size: 14px;
  }

  .i-swipeout-demo-title {
    height: 30px;
    padding: 0 15px;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .i-swipeout-demo-des {
    padding: 0 15px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #ff9900;
  }

  /*左中右结构*/
  .i-swipeout-image {
    float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 40px;
    background: #2d8cf0;
  }

  .i-swipeout-des {
    margin-left: 50px;
  }

  .i-swipeout-des-detail {
    font-size: 12px;
    word-break: break-all;
    color: #80848f;
  }

  /*自定义按钮*/
  .i-swipeout-demo-button-group {
    height: 100%;
    width: 100%;
  }

  .i-swipeout-demo-button {
    width: 70px;
    float: left;
    display: flex;
    height: 100%;
    justify-content: center;
    background: #2d8cf0;
    color: #fff;
    align-items: center;
  }
</style>
