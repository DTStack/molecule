import * as React from 'react';
import { IComponent } from './component';
import { Controller } from './controller';
export declare type ServiceObject = {
    [index: string]: IComponent;
};
export declare type ControllerObject = {
    [index: string]: Controller;
};
export declare function connect(Service: IComponent | ServiceObject, View: React.ComponentType<any>, Controller?: Controller | ControllerObject, watchFiled?: object): {
    new (props: any): {
        state: {
            lastUpdated: number;
        };
        componentDidMount(): void;
        onChange(prevState: any, nextState: any): void;
        update: () => void;
        getServiceState(): {};
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
