# Markdown Editor based on Chrome Extensions
A Markdown editor based on chrome extensions for my graduation project .



version 0.0.1 (2019.3.21更新):

- 参考文献: [【干货】Chrome插件(扩展)开发全攻略](http://blog.haoji.me/chrome-plugin-develop.html) (by 小茗同学).

- 为了看到功能 , 主界面暂时使用的是 [marked.js写实时预览Markdown编辑器](https://www.uedbox.com/post/9331/) , 后面会自己实现一个.

- 暂未用到、以后加功能会用到的参考文献:  [动手写一个简单的浏览器扩展插件](https://blog.csdn.net/deeplies/article/details/80898787) .

- 遇到的坑:

  - 在 html 文件中无法使用内联js: 

    > Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' chrome-extension-resource:"

    解决方案: 使用外联js ( popup.js & index.js )



TODO list:

- [ ] 重绘图标
- [ ] 重写界面
- [ ] 菜单栏
- [ ] 导入功能 ( 上传文件和拖拽文件两种方式 )
- [ ] 导出功能 ( html pdf word md等文件格式)
- [ ] 代码行数 (?)
- [ ] 文字编辑区和展示区同上同下 (?)
- [ ] 换皮肤 (?)