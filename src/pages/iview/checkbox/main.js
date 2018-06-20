import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Checkbox 复选',
    usingComponents: {
      'i-panel': '../../../static/iview/panel/index',
      'i-button': '../../../static/iview/button/index',
      'i-checkbox-group': '../../../static/iview/checkbox-group/index',
      'i-checkbox': '../../../static/iview/checkbox/index',
    }
  }
}
