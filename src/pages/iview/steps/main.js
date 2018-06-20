import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarTitleText': 'Steps 步骤条',
    usingComponents: {
      'i-steps': '../../../static/iview/steps/index',
      'i-step': '../../../static/iview/step/index',
      'i-button': '../../../static/iview/button/index',
    }
  }
}
