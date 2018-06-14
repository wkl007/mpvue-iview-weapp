import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'iView Weapp',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
      'i-cell-group': '../../../static/iview/cell-group/index',
      'i-cell': '../../../static/iview/cell/index',
    }
  }
}
