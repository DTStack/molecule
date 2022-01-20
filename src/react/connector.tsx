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

        private isValidService(service: IComponent) {
            return typeof service.onUpdateState === 'function';
        }
    };
}
