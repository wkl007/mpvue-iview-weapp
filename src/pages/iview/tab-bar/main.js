import Vue from "vue";
import App from "./index";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    "navigationBarTitleText": "TabBar 标签栏",
    usingComponents: {
      "i-tab-bar": "../../../static/iview/tab-bar/index",
      "i-tab-bar-item": "../../../static/iview/tab-bar-item/index",
      "i-panel": "../../../static/iview/panel/index"
    }
  }
};
