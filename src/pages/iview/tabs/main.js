import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#FAFAFA',
    'navigationBarTitleText': 'Tabs 标签页',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
      'i-tabs': '../../../static/iview/tabs/index',
      'i-tab': '../../../static/iview/tab/index',
    }
  }
}
