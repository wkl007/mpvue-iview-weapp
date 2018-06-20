import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Panel 面板',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
    }
  }
}
