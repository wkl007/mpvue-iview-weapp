import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Spin 加载中',
    usingComponents: {
      'i-spin': '../../../static/iview/spin/index',
      'i-panel': '../../../static/iview/panel/index',
      'i-row': '../../../static/iview/row/index',
      'i-col': '../../../static/iview/col/index',
      'i-grid': '../../../static/iview/grid/index',
      'i-grid-item': '../../../static/iview/grid-item/index',
      'i-icon': '../../../static/iview/icon/index',
      'i-switch': '../../../static/iview/switch/index',
    }
  }
}
