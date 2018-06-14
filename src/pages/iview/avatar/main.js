import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Avatar 头像',
    usingComponents: {
      'i-avatar': '../../../static/iview/avatar/index',
      'i-row': '../../../static/iview/row/index',
      'i-col': '../../../static/iview/col/index',
      'i-panel': '../../../static/iview/panel/index',
    }
  }
}
