import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Color 色彩',
    usingComponents: {
      'i-card': '../../../static/iview/card/index',
      'i-row': '../../../static/iview/row/index',
      'i-col': '../../../static/iview/col/index',
      'i-panel': '../../../static/iview/panel/index'
    }
  }
}
