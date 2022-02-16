项目目的,项目完成的基础上,考虑以下几点

1. 数据量大,数据机构复杂
2. 研发效率
3. 性能
4. 用户体验
5. 项目的质量和稳定性

项目的规范
1. eslint 代码规范
    npx eslint lint
2. husky 控制git规范，git commit代码之前，代码必须要跑一下 eslint
    npx husky install
3. git 管理代码
    git init
4. 文件夹规范
    src
        pages：    页面
        components:  通用组件
        api: 数据请求
        utils: 工具函数库
        assets: 静态资源

5. git log规范


    type: message
    type(module): message
    perf(reactivity): addxx

    refactor: 代码重写 不影响功能
    chore: 不知道是啥, 就写这个
    feat: 新功能
    fix: 改造bug
    docs: 文档
    perf: 性能
    test: 测试
    style: 样式
    ci: 打包集成相关
    build: 部署
    wip: 写了一半没写成
    release: 发版
    deps: 依赖更改