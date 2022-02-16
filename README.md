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