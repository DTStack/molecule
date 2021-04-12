import * as React from 'react';
/**
 * Mapping the state to the component
 * TODO support mapping service method to the component.
 * @param WrappedComponent The component will be wrapped
 * @param state The state you want to injected, notice the state must be an observable object
 * @param subscribes The events of your subscribe, it used to trigger the state re render
 */
export declare function mapState<S, T>(WrappedComponent: React.ComponentType<S>, state: S, actions?: T): {
    new (props: any): {
        state: {
            lastUpdated: number;
        };
        componentDidMount(): void;
        /**
         * TODO: Performance optimize, now whatever any properties changed in target,
         * there always be trigger the onChange event, so need a compare operation.
         * @param nextState changed data
         */
        onChange(nextState: S): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
