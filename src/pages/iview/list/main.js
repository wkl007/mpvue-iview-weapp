import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'List 列表',
    usingComponents: {
      'i-cell-group': '../../../static/iview/cell-group/index',
      'i-cell': '../../../static/iview/cell/index',
      'i-panel': '../../../static/iview/panel/index',
      'i-icon': '../../../static/iview/icon/index',
      'i-switch': '../../../static/iview/switch/index',
    }
  }
}
