import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Layout 栅格布局',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
      'i-row': '../../../static/iview/row/index',
      'i-col': '../../../static/iview/col/index',
    }
  }
}
