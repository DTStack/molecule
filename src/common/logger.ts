declare let __DEVELOPMENT__: boolean;

export default {
    info(...args) {
        // The blow codes just for development
        if (__DEVELOPMENT__) {
            console.group(`Logger.info:`, args);
            console.groupEnd();
        }
    },

    error(...args) {
        console.error(args);
    },
};
