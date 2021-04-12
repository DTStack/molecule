declare const _default: {
    title: string;
    component: {
        ({ showApp }: {
            showApp: () => void;
        }): JSX.Element;
        displayName: string;
        propTypes: {
            showApp: import("prop-types").Requireable<(...args: any[]) => any>;
        };
        defaultProps: {
            showApp: any;
        };
    };
};
export default _default;
export declare const ToStorybook: {
    (): JSX.Element;
    story: {
        name: string;
    };
};
