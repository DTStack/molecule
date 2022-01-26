import 'reflect-metadata';
import { container } from 'tsyringe';
import React, { Component } from 'react';
import Logger from 'mo/common/logger';
import { IComponent } from './component';
import { Controller } from './controller';

export type ServiceObject = {
    [index: string]: IComponent;
};

export type ControllerObject = {
    [index: string]: Controller;
};

export function connect<T = any>(
    Service: IComponent | ServiceObject,
    View: React.ComponentType<any>,
    Controller?: Controller | ControllerObject
): React.ComponentType<T> {
    return class Connector extends Component<T, any> {
        state: { lastUpdated: number };
        private _isMounted = false;
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
            this.state = {
                lastUpdated: Date.now(),
            };
        }

        componentDidMount() {
            this._isMounted = true;
            this.handleService((service) => {
                service.onUpdateState(this.onChange);
            });
        }

        componentWillUnmount() {
            this._isMounted = false;
            this.handleService((service) => {
                service.removeOnUpdateState(this.onChange);
            });
        }

        onChange(prevState, nextState) {
            Logger.info(prevState, nextState, (container as any)._registry);
            this.update();
        }

        update = () => {
            if (this._isMounted) {
                this.setState({
                    lastUpdated: Date.now(),
                });
            }
        };

        getServiceState() {
            const target = {};
            this.handleService((service, prop) => {
                if (prop) {
                    Object.assign(target, {
                        [prop]: { ...service.getState() },
                    });
                } else {
                    Object.assign(target, { ...service.getState() });
                }
            });
            return target;
        }

        handleService(callback: (service: IComponent, prop?: string) => void) {
            if (this.isValidService(Service as IComponent)) {
                callback(Service as IComponent);
            } else {
                for (const name in Service) {
                    if (name) {
                        const service: IComponent = Service[name];
                        if (this.isValidService(service)) {
                            callback(service, name);
                        }
                    }
                }
            }
        }

        getControllers() {
            const target = {};
            if (!Controller) {
                return target;
            }

            this.handleController((controller: Controller, prop) => {
                if (prop) {
                    Object.assign(target, {
                        [prop]: this.getObjectPublicProperties(controller),
                    });
                } else {
                    Object.assign(
                        target,
                        this.getObjectPublicProperties(controller)
                    );
                }
            });
            return target;
        }

        handleController(
            callback: (controller: Controller, prop?: string) => void
        ) {
            if (this.isValidController(Controller as Controller)) {
                callback(Controller as Controller);
            } else {
                for (const name in Controller) {
                    if (name) {
                        const controller: Controller = Controller[name];
                        if (this.isValidController(controller)) {
                            callback(controller, name);
                        }
                    }
                }
            }
        }

        render() {
            return (
                <View
                    {...this.state}
                    {...this.props}
                    {...this.getServiceState()}
                    {...this.getControllers()}
                />
            );
        }

        private isValidService(service: IComponent) {
            return typeof service.onUpdateState === 'function';
        }

        private isValidController(controller: Controller) {
            return typeof controller.initView === 'function';
        }

        private getObjectPublicProperties(obj: Controller) {
            const keys = Object.keys(obj);
            const result = {};
            keys.forEach((key) => {
                // Filter the Service, Controller instances and private properties which start with '_'
                // TODO There need a better way to filter the private properties of Object,
                // maybe we can make use of the # identifier in future.
                if (
                    !key.endsWith('Service') &&
                    !key.endsWith('Controller') &&
                    !key.startsWith('_')
                ) {
                    result[key] = obj[key];
                }
            });
            return result;
        }
    };
}
