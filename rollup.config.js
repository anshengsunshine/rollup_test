import babel from 'rollup-plugin-babel'
export default {
    input: "src/index.js",
    output: [
        {
            file: "./dist/ansheng-lib-umd.js",
            format: "umd",
            name: "anshengLib",
            //当入口文件有export时，'umd'格式必须指定name
            //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
        }, {
            file: "./dist/ansheng-lib-es.js",
            format: "es"
        }, {
            file: "./dist/ansheng-lib-cjs.js",
            format: "cjs"
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}