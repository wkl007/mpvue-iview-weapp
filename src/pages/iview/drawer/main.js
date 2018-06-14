import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Drawer 抽屉',
    usingComponents: {
      'i-drawer': '../../../static/iview/drawer/index',
      'i-button': '../../../static/iview/button/index',
    }
  }
}
