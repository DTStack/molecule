import React from 'react';
import {
    Children,
    PureComponent,
    isValidElement,
    RefObject,
    ComponentProps,
} from 'react';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
    getAttr,
} from '@dtinsight/molecule-common';
import { cloneReactChildren } from '@dtinsight/molecule-glue';
import { IContextView, useContextView } from '../contextView';

import { ISelectOptionProps } from './option';
import { Icon } from '../icon';

export interface ISelectProps extends Omit<ComponentProps<'div'>, 'onSelect'> {
    value?: string;
    style?: React.CSSProperties;
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    children?: React.ReactNode;
    onSelect?(e: React.MouseEvent, selectedOption?: ISelectOptionProps): void;
}

const initialValue = {
    isOpen: false,
    option: {
        name: '',
        value: '',
        description: '',
    },
};

type IState = {
    isOpen: boolean;
    option: ISelectOptionProps;
};

export const selectClassName = prefixClaName('select');
const containerClassName = getBEMElement(selectClassName, 'container');
const selectOptionsClassName = getBEMElement(selectClassName, 'options');
const selectDescriptorClassName = getBEMElement(selectClassName, 'descriptor');
export const inputClassName = getBEMElement(selectClassName, 'input');
const selectActiveClassName = getBEMModifier(selectClassName, 'active');
const selectArrowClassName = getBEMElement(selectClassName, 'arrow');

export class Select extends PureComponent<ISelectProps, IState> {
    private contextView: IContextView;
    public state: IState;
    private selectElm: RefObject<HTMLDivElement>;
    private selectInput: RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.contextView = useContextView({
            shadowOutline: false,
        });
        this.state = this.getDefaultState(this.props);
        this.selectElm = React.createRef();
        this.selectInput = React.createRef();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.value !== state.value) {
            return {
                option: Select.getSelectOption(props),
            };
        }
        return null;
    }

    public componentDidMount() {
        this.contextView.onHide(() => {
            if (this.state.isOpen) {
                this.setState({
                    isOpen: false,
                });
            }
        });
    }

    public componentWillUnmount() {
        this.contextView.dispose();
    }

    private static getSelectOption(props) {
        let defaultSelectedOption: ISelectOptionProps = {};
        const defaultValue = props.value || props.defaultValue;
        const options = Children.toArray(props.children);
        for (const option of options) {
            if (isValidElement(option)) {
                const optionProps = option.props as ISelectOptionProps;
                if (optionProps.value && optionProps.value === defaultValue) {
                    defaultSelectedOption = {
                        ...optionProps,
                        name:
                            optionProps.name ||
                            (optionProps.children as string),
                    };
                    break;
                }
            }
        }
        return defaultSelectedOption;
    }

    private getDefaultState(props) {
        return {
            ...initialValue,
            option: { ...Select.getSelectOption(props) },
        };
    }

    public handleOnClickOption = (e: React.MouseEvent) => {
        const option = e.target as HTMLDivElement;
        const value = getAttr(option, 'data-value');
        const name = getAttr(option, 'data-name');
        const desc = getAttr(option, 'data-desc');
        if (name) {
            const optionItem: ISelectOptionProps = {
                value: value,
                name: name,
                description: desc,
            };

            this.setState(
                {
                    option: optionItem,
                },
                () => {
                    this.props.onSelect?.(e, optionItem);
                    this.contextView.hide();
                }
            );
        }
    };

    public handleOnHoverOption = (e: React.MouseEvent) => {
        const option = e.target as HTMLDivElement;
        const desc = getAttr(option, 'data-desc');
        const descriptor = this.contextView.view!.querySelector(
            '.' + selectDescriptorClassName
        );
        if (descriptor) {
            const content = desc || 'None';
            descriptor.innerHTML = content;
            descriptor.setAttribute('title', content);
        }
    };

    public handleOnClickSelect = (e: React.MouseEvent) => {
        const select = this.selectElm.current;
        const { children } = this.props;
        if (select) {
            const selectRect = select?.getBoundingClientRect();
            selectRect.y = selectRect.y + selectRect.height;
            this.setState({ isOpen: true });

            this.contextView.show(selectRect, () => {
                return (
                    <div
                        style={{
                            width: selectRect.width,
                        }}
                        className={classNames(
                            containerClassName,
                            selectActiveClassName
                        )}
                        onMouseOver={this.handleOnHoverOption}
                    >
                        <div className={selectOptionsClassName}>
                            {cloneReactChildren<ISelectOptionProps>(children, {
                                onClick: this.handleOnClickOption,
                            })}
                        </div>
                        <div className={selectDescriptorClassName}>None</div>
                    </div>
                );
            });
        }
    };

    public render() {
        const { option, isOpen } = this.state;
        const { className, placeholder, onSelect, ...restProps } = this.props;

        const selectActive = isOpen ? selectActiveClassName : '';
        const claNames = classNames(selectClassName, className, selectActive);
        return (
            <div ref={this.selectElm} className={claNames} {...restProps}>
                <input
                    onClick={this.handleOnClickSelect}
                    ref={this.selectInput}
                    autoComplete="off"
                    placeholder={placeholder}
                    className={inputClassName}
                    value={option.name}
                    readOnly
                />
                <span className={selectArrowClassName}>
                    <Icon type={'chevron-down'} />
                </span>
            </div>
        );
    }
}
