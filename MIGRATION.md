<h1>Migration</h1>

-   [From version 1.0.x to 1.1.0](#from-version-10x-to-110)
    -   [React18 upgrade](#react18-upgrade)

## From version 1.0.x to 1.1.0

### React18 upgrade

React 18 introduced a [new root API](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis). Starting from 1.1.0, Molecule itself will auto-detect your version of react and use the new root API automatically if you're on React18. But It's attentioned that there are several dependencies of Molecule still incompatible of React18's strict mode. So Molecule now still not compatible with `React.StrictMode` in React@18.x. For exmaple: [react-scrollbars-custom](https://github.com/xobotyi/react-scrollbars-custom/issues/234).
