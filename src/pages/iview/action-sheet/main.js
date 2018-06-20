import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'ActionSheet 动作面板',
    usingComponents: {
      'i-action-sheet': '../../../static/iview/action-sheet/index',
      'i-button': '../../../static/iview/button/index',
      'i-message': '../../../static/iview/message/index'
    }
  }
}
