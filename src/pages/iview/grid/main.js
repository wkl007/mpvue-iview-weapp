import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Grid 宫格',
    usingComponents: {
      'i-grid': '../../../static/iview/grid/index',
      'i-grid-item': '../../../static/iview/grid-item/index',
      'i-grid-icon': '../../../static/iview/grid-icon/index',
      'i-grid-label': '../../../static/iview/grid-label/index',
      'i-icon': '../../../static/iview/icon/index',
      'i-row': '../../../static/iview/row/index',
    }
  }
}
