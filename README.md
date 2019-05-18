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

version 0.1.0 (2019.5.16 20:30)

- 大概做完了 主界面改动自 [Markdown Editor]( https://github.com/chenzhiwei/chrome-markdown-editor )
- 右下角菜单来自 [html5tricks](https://www.html5tricks.com/demo/pure-css3-circle-menu/index.html )
- 遇到的坑:打开文件用了input元素，旋转出来不在父元素中间
  - 解决方案：前面加空格
- 细微调整之后有时间慢慢做

version 1.0.0 (2019.5.18 16:30)

- 美化了popup页面，按钮css来自：[html5tricks](https://www.html5tricks.com/demo/css3-material-design-button/index.html )
- 加了个不用心的关于界面
- 预期的所有功能已经完成，正常能看到的界面已经美化过了，个人觉得可以交待了
- 有问题后期再修复，开始写论文了

TODO list:

- [x] 重绘图标
- [x] 重写界面
- [x] 菜单栏
- [x] 导入功能 ( 上传文件和拖拽文件两种方式 )
- [ ] 导出功能 ( html pdf word md等文件格式)
  - [ ] html(暂时不实现)
  - [x] pdf(用了[Markdown Editor]( https://github.com/chenzhiwei/chrome-markdown-editor )的方法)
  - [ ] word(暂时不实现)
  - [x] md
- [x] 代码行数 (?) (已经实现)
- [x] 文字编辑区和展示区同上同下 (?) 
- [ ] 换皮肤功能 (暂不实现)
- [x] 美化一下popup界面
- [ ] 查看一下代码同上同下时鼠标滑轮滑不动的问题 (懒得修复了 也算是不好用的功能之一了)