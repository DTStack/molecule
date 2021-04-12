import * as React from 'react';
import { IPanel } from 'mo/model/workbench/panel';
import { IActivityBar } from 'mo/model/workbench/activityBar';
import { ISidebar } from 'mo/model/workbench/sidebar';
import { IMenuBar } from 'mo/model/workbench/menuBar';
import { IStatusBar } from 'mo/model/workbench/statusBar';
import { IWorkbenchController } from 'mo/controller/workbench';
export interface IWorkbench {
    panel: IPanel;
    activityBar: IActivityBar;
    menuBar: IMenuBar;
    statusBar: IStatusBar;
    sideBar: ISidebar;
}
export declare function WorkbenchView(props: IWorkbench & IWorkbenchController): JSX.Element;
export declare const Workbench: {
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
export default Workbench;
