import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Input 输入框',
    usingComponents: {
      'i-input': '../../../static/iview/input/index',
      'i-button': '../../../static/iview/button/index',
      'i-panel': '../../../static/iview/panel/index',
    }
  }
}
