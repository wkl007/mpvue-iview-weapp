import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Progress 进度条',
    usingComponents: {
      'i-progress': '../../../static/iview/progress/index',
      'i-button': '../../../static/iview/button/index'
    }
  }
}
