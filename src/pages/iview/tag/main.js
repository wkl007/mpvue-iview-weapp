import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'tag',
    usingComponents: {
      'i-tag': '../../../static/iview/tag/index'
    }
  }
}
