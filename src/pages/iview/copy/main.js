import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'sticky 吸顶容器',
    usingComponents: {
      'i-button': '../../../static/iview/sticky/index',
      'i-panel': '../../../static/iview/sticky-item/index'
    }
  }
}
