import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Alert 警告提示',
    usingComponents: {
      'i-alert': '../../../static/iview/alert/index',
    }
  }
}
