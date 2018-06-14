import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Rate 评分',
    usingComponents: {
      'i-rate': '../../../static/iview/rate/index',
      'i-cell-group': '../../../static/iview/cell-group/index',
      'i-cell': '../../../static/iview/cell/index'
    }
  }
}
