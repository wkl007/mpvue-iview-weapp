import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'index 索引选择器',
    usingComponents: {
      'i-index': '../../../static/iview/index/index',
      'i-index-item': '../../../static/iview/index-item/index'
    }
  }
}
