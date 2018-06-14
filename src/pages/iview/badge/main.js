import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Badge 徽章',
    usingComponents: {
      'i-badge': '../../../static/iview/badge/index',
    }
  }
}
