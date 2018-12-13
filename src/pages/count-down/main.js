import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': '倒计时',
    usingComponents: {
      'i-count-down': '../../../static/iview/count-down/index'
    }
  }
}
