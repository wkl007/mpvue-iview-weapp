import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Toast 轻提示',
    usingComponents: {
      'i-toast': '../../../static/iview/toast/index',
      'i-button': '../../../static/iview/button/index',
    }
  }
}
