import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Modal 对话框',
    usingComponents: {
      'i-modal': '../../../static/iview/modal/index',
      'i-button': '../../../static/iview/button/index',
      'i-message': '../../../static/iview/message/index'
    }
  }
}
