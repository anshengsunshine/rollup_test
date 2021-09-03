# rollup_test
rollup从入门到打包一个组件库

`npm init -y`
初始化项目，新增package.json

`npm i rollup`
安装rollup

新建`src/a.js`、`src/main.js`

### 打包

如果是全局安装，直接在项目根目录下执行：
`rollup -i src/index.js -o dist/bundle.js -f es`;

如果是项目本地安装，在package.json的script字段中添加：
`"dev": "rollup -i src/index.js -o dist/bundle.js -f es"`，然后执行`npm run dev`

* -i指定要打包的文件，-i是--input的缩写。
* src/index.js是-i的参数，即打包入口文件。
* -o指定输出的文件，是--output.file或--file的缩写。(如果没有这个参数，则直接输出到控制台)
* dist/bundle.js是-o的参数，即输出文件。
* -f指定打包文件的格式，-f是--format的缩写。
* es是-f的参数，表示打包文件使用ES6模块规范。






