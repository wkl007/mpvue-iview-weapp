import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Switch 开关',
    usingComponents: {
      'i-switch': '../../../static/iview/switch/index',
      'i-icon': '../../../static/iview/icon/index',
      'i-cell-group': '../../../static/iview/cell-group/index',
      'i-cell': '../../../static/iview/cell/index',
      'i-panel': '../../../static/iview/panel/index'
    }
  }
}
