import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Page 分页',
    usingComponents: {
      'i-page': '../../../static/iview/page/index',
      'i-icon': '../../../static/iview/icon/index',
      'i-panel': '../../../static/iview/panel/index'
    }
  }
}
