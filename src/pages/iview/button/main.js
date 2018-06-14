import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Button 按钮',
    usingComponents: {
      'i-button': '../../../static/iview/button/index',
      'i-panel': '../../../static/iview/panel/index'
    }
  }
}
