declare let __DEVELOPMENT__: boolean;

export default {
    info(content: any) {
        // The blow codes just for development
        if (__DEVELOPMENT__) {
            console.group(`Logger.info:`, content);
            console.groupEnd();
        }
    },
};
