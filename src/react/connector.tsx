import 'reflect-metadata';
import * as React from 'react';
import Logger from 'mo/common/logger';
import { IComponent } from './component';
import { Controller } from './controller';
import { container } from 'tsyringe';

export type ServiceObject = {
    [index: string]: IComponent;
};

export type ControllerObject = {
    [index: string]: Controller;
};

export function connect<T = any>(
    Service: IComponent | ServiceObject,
    View: React.ComponentType<any>,
    Controller?: Controller | ControllerObject,
    watchFiled?: object
): React.ComponentType<T> {
    return class Connector extends React.Component<T, any> {
        state: { lastUpdated: number };
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }

        componentDidMount() {
            if (Service.onUpdateState) {
                const service = Service as IComponent;
                service.onUpdateState(this.onChange);
            } else {
                for (const name in Service) {
                    if (name) {
                        const service: IComponent = Service[name];
                        if (service.onUpdateState) {
                            service.onUpdateState(this.onChange);
                        }
                    }
                }
            }
        }

        onChange(prevState, nextState) {
            Logger.info(prevState, nextState, (container as any)._registry);
            if (!watchFiled) {
                this.update();
            } else {
                // TODO, 目前会全量触发更新，后期根据 watchField 字段来控制更新粒度
                // const prev = get(prevState, watchFiled);
                // const next = get(nextState, watchFiled);
                // if (!equals(prev, next)) {
                //     this.update();
                // }
            }
        }

        update = () => {
            this.setState({
                lastUpdated: Date.now(),
            });
        };

        getServiceState() {
            const target = {};
            if (Service.onUpdateState) {
                const service = Service as IComponent;
                Object.assign(target, { ...service.getState() });
            } else {
                for (const name in Service) {
                    if (name) {
                        const service: IComponent = Service[name];
                        if (service.getState) {
                            Object.assign(target, {
                                [name]: { ...service.getState() },
                            });
                        }
                    }
                }
            }
            return target;
        }

        render() {
            return (
                <View
                    {...this.state}
                    {...this.getServiceState()}
                    {...this.props}
                    {...Controller}
                />
            );
        }
    };
}
