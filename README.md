# mpvue-iview-weapp

>使用mpvue通过usingComponents导入[iview-weapp](https://github.com/TalkingData/iview-weapp)

## 预览

``` bash
1. git clone
git clone https://github.com/wkl007/mpvue-iview-weapp

2. 安装依赖
cd mpvue-iview-weapp && npm install

3. 启动程序
npm run dev

4. 预览
打开微信开发者工具，新建项目，将目录指向 /dist 即可
```

## 问题
若原生组件通过`click`事件，即`this.triggerEvent('click', { index })`来进行父子组件通信，`mpvue`无法从`event.mp`中读取到正确的`detail`，原因是因为`mpvue`将`click`事件编译为`tap`导致`this.triggerEvent('click', { index })`无法找到`click`句柄

## 暂时解决方案
修改组件库`click`事件名称，例如：

`this.triggerEvent('click', { index })` => `this.triggerEvent('iclick', { index })`

对应的模板中：

`@click` => `@iclick`

> 注：本次示例中修改了`action-sheet`、`modal`组件

## 受影响组件(仅传值情况受影响)
1. action-sheet
2. modal
