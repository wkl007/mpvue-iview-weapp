import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Divider 分隔符',
    usingComponents: {
      'i-divider': '../../../static/iview/divider/index'
    }
  }
}
