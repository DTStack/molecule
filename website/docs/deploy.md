---
sidebar_position: 2
---

# Deploy

## Build

The `build` command will generate build files in current folder.

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

`create-react-app` will generate these files in `./build` by default. We can show these folders as a tree:

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

## Local

After building successful, we usually want to verify the result folders before publishing. So we recommend to verfiy via `serve`.

```shell
# global install the serve
$ yarn global add serve
# boot up server in slient mode
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

And you can open [http://localhost:5000](http://localhost:5000) to check whether the pages are as same as the pages started by `yarn start`.

## Publish

And now, you can publish the build folder to the server in confidence.
