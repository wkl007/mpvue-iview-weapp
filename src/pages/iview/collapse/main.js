import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': '折叠面板',
    usingComponents: {
      'i-collapse': '../../../static/iview/collapse/index',
      'i-collapse-item': '../../../static/iview/collapse-item/index'
    }
  }
}
