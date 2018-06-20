import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'NoticeBar 通告栏',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
      'i-notice-bar': '../../../static/iview/notice-bar/index',
    }
  }
}
