import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Message 全局提醒',
    usingComponents: {
      'i-message': '../../../static/iview/message/index',
      'i-button': '../../../static/iview/button/index',
    }
  }
}
