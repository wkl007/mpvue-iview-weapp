import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Radio 单选',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
      'i-button': '../../../static/iview/button/index',
      'i-radio-group': '../../../static/iview/radio-group/index',
      'i-radio': '../../../static/iview/radio/index',
    }
  }
}
