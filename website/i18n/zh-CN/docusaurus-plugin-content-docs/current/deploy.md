---
title: 配置
sidebar_label: 配置
---

# 配置

## 构建

`build` 命令将会在当前文件夹下生成构建文件

```shell
$ yarn build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

    965.48 KB  build/static/js/4.d78ff270.chunk.js
    ...
    ...
    ...
    278 B      build/static/css/main.6dea0f05.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

✨  Done in 113.19s.
```

`create-react-app` 生成的项目将会把这个构建文件默认放到 `./build` 下，我们可以通过 `tree` 命令以树状结构展示文件夹内容：

```shell
$ tree -L 1 ./build

./build
├── asset-manifest.json
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
└── static

1 directory, 7 files
```

## 本地验证

在构建文件成功之后，通常我们会想要验证这些文件是否可以正常运行。这里我们推荐用 `serve` 来做验证

```shell
# 全局安装 serve 依赖
$ yarn global add serve
# 静默模式启动 serve
$ serve -s build

   ┌─────────────────────────────────────────────────────┐
   │                                                     │
   │   Serving!                                          │
   │                                                     │
   │   - Local:            http://localhost:5000         │
   │   - On Your Network:  http://192.168.106.232:5000   │
   │                                                     │
   │   Copied local address to clipboard!                │
   │                                                     │
   └─────────────────────────────────────────────────────┘
```

启动之后，你可以自行打开 [http://localhost:5000](http://localhost:5000) 来验证当前页面是否与通过 `yarn start` 命令所启动的页面保持一致。

## 发布

验证通过之后，你就可以放心地将构建文件夹发布到你的服务器上了。
