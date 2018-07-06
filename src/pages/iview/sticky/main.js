import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'sticky 吸顶容器',
    usingComponents: {
      'i-sticky': '../../../static/iview/sticky/index',
      'i-sticky-item': '../../../static/iview/sticky-item/index'
    }
  }
}
