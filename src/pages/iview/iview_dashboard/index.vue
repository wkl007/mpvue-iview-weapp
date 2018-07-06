<template>
  <div>
    <div class="logo">
      <img src="https://file.iviewui.com/iview-weapp-logo.png" alt="">
    </div>
    <i-panel title="布局">
      <i-cell-group>
        <i-cell title="Layout 栅格布局" is-link url="/pages/iview/layout/main"></i-cell>
        <i-cell title="Grid 宫格" is-link url="/pages/iview/grid/main"></i-cell>
        <i-cell title="Panel 面板" is-link url="/pages/iview/panel/main"></i-cell>
        <i-cell title="List 列表" is-link url="/pages/iview/list/main"></i-cell>
        <i-cell title="Card 卡片" is-link url="/pages/iview/card/main"></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel title="基础组件">
      <i-cell-group>
        <i-cell title="Button 按钮" is-link url="/pages/iview/button/main"></i-cell>
        <i-cell title="Color 色彩" is-link url="/pages/iview/color/main"></i-cell>
        <i-cell title="Icon 图标" is-link url="/pages/iview/icon/main"></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel title="导航">
      <i-cell-group>
        <i-cell title="TabBar 标签栏" is-link url="/pages/iview/tab-bar/main"></i-cell>
        <i-cell title="Tabs 标签页" is-link url="/pages/iview/tabs/main"></i-cell>
        <i-cell title="Drawer 抽屉" is-link url="/pages/iview/drawer/main"></i-cell>
        <i-cell title="Page 分页" is-link url="/pages/iview/page/main"></i-cell>
        <i-cell title="Steps 步骤条" is-link url="/pages/iview/steps/main"></i-cell>
        <i-cell title="NoticeBar 通告栏" is-link url="/pages/iview/notice-bar/main"></i-cell>
        <i-cell title="index 索引选择器" is-link url="/pages/iview/index-list/main"></i-cell>
        <i-cell title="sticky 吸顶容器" is-link url="/pages/iview/sticky/main"></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel title="操作反馈">
      <i-cell-group>
        <i-cell title="ActionSheet 动作面板" is-link url="/pages/iview/action-sheet/main"></i-cell>
        <i-cell title="Toast 轻提示" is-link url="/pages/iview/toast/main"></i-cell>
        <i-cell title="Modal 对话框" is-link url="/pages/iview/modal/main"></i-cell>
        <i-cell title="Message 全局提醒" is-link url="/pages/iview/message/main"></i-cell>
        <i-cell title="Spin 加载中" is-link url="/pages/iview/spin/main"></i-cell>
        <i-cell title="Swipeout 滑动菜单" is-link url="/pages/iview/swipeout/main"></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel title="视图">
      <i-cell-group>
        <i-cell title="Badge 徽章" is-link url="/pages/iview/badge/main"></i-cell>
        <i-cell title="Alert 警告提示" is-link url="/pages/iview/alert/main"></i-cell>
        <i-cell title="Tag 标签" is-link url="/pages/iview/tag/main"></i-cell>
        <i-cell title="Progress 进度条" is-link url="/pages/iview/progress/main"></i-cell>
        <i-cell title="Avatar 头像" is-link url="/pages/iview/avatar/main"></i-cell>
        <i-cell title="CountDown 倒计时" is-link url="/pages/iview/count-down/main"></i-cell>
        <i-cell title="Divider 分隔符" is-link url="/pages/iview/divider/main"></i-cell>
        <i-cell title="Collapse 折叠面板" is-link url="/pages/iview/collapse/main"></i-cell>
        <i-cell title="LoadMore 页底提示" is-link url="/pages/iview/load-more/main"></i-cell>
      </i-cell-group>
    </i-panel>
    <i-panel title="表单">
      <i-cell-group>
        <i-cell title="Input 输入框" is-link url="/pages/iview/input/main"></i-cell>
        <i-cell title="Radio 单选" is-link url="/pages/iview/radio/main"></i-cell>
        <i-cell title="Checkbox 复选" is-link url="/pages/iview/checkbox/main"></i-cell>
        <i-cell title="Switch 开关" is-link url="/pages/iview/switch/main"></i-cell>
        <i-cell title="Rate 评分" is-link url="/pages/iview/rate/main"></i-cell>
        <i-cell title="InputNumber 数字输入框" is-link url="/pages/iview/input-number/main"></i-cell>
      </i-cell-group>
    </i-panel>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .logo {
    text-align: center;
    img {
      display: block;
      width: 70%;
      margin: 0 auto;
    }
  }
</style>
