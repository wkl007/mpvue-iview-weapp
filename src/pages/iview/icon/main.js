import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Icon 图标',
    usingComponents: {
      'i-icon': '../../../static/iview/icon/index',
      'i-grid': '../../../static/iview/grid/index',
      'i-grid-item': '../../../static/iview/grid-item/index',
    }
  }
}
