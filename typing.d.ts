declare module '*.scss' {
    const variables: Record<string, string>;
    export default variables;
}

interface Window {
    __locale__?: Record<string, any>;
}
