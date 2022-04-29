export default {
    info(...args) {
        // The blow codes just for development
        if (process.env.__DEVELOPMENT__) {
            console.group(`Logger.info:`, ...args);
            console.groupEnd();
        }
    },

    error(...args) {
        console.error(...args);
    },

    warn(...args) {
        console.warn(...args);
    },
};
