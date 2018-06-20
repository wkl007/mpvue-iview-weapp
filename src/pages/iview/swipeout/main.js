import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Swipeout 滑动菜单',
    usingComponents: {
      'i-swipeout': '../../../static/iview/swipeout/index',
      'i-cell-group': '../../../static/iview/cell-group/index',
      'i-cell': '../../../static/iview/cell/index',
      'i-card': '../../../static/iview/card/index',
      'i-icon': '../../../static/iview/icon/index',
      'i-action-sheet': '../../../static/iview/action-sheet/index'
    }
  }
}
