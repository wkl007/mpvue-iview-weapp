import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'InputNumber 数字输入框',
    usingComponents: {
      'i-input-number': '../../../static/iview/input-number/index',
      'i-panel': '../../../static/iview/panel/index'
    }
  }
}
