import './style.scss';
import * as React from 'react';
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
} from 'mo/common/className';
import { cloneReactChildren } from 'mo/react';
import { getAttr } from 'mo/common/dom';
import { IContextView, useContextView } from 'mo/components/contextview';

import { ISelectOption } from './option';
import { Icon } from '../icon';

export interface ISelect extends ComponentProps<any> {
    value?: string;
    style?: React.CSSProperties;
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    showArrow?: boolean;
    children?: ReactNode;
    onSelect?(e: React.MouseEvent, selectedOption?: ISelectOption): void;
}

const initialValue = {
    isOpen: false,
    option: {
        title: '',
        value: '',
        description: '',
    },
};

type IState = {
    isOpen: boolean;
    lastUpdate?: number;
    option: ISelectOption;
};

export const selectClassName = prefixClaName('select');
const containerClassName = getBEMElement(selectClassName, 'container');
const selectOptionsClassName = getBEMElement(selectClassName, 'options');
const selectDescriptorClassName = getBEMElement(selectClassName, 'descriptor');
const inputClassName = getBEMElement(selectClassName, 'input');
const selectActiveClassName = getBEMModifier(selectClassName, 'active');
const selectArrowClassName = getBEMElement(selectClassName, 'arrow');

export class Select extends PureComponent<ISelect, IState> {
    private contextView: IContextView;
    public state: IState;
    private selectElm: RefObject<HTMLDivElement>;
    private selectInput: RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.contextView = useContextView({
            shadowOutline: false,
        });
        this.state = this.getDefaultState();
        this.selectElm = React.createRef();
        this.selectInput = React.createRef();
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

    public getDefaultState() {
        const defaultSelectedOption: ISelectOption = {};
        const options = Children.toArray(this.props.children);
        for (const option of options) {
            if (isValidElement(option)) {
                const optionProps = option.props as ISelectOption;
                if (
                    optionProps.value &&
                    optionProps.value === this.props.defaultValue
                ) {
                    defaultSelectedOption.title = optionProps.children as string;
                    defaultSelectedOption.value = optionProps.value;
                    break;
                }
            }
        }
        return {
            ...initialValue,
            option: defaultSelectedOption,
        };
    }

    public handleOnClickOption = (e: React.MouseEvent) => {
        const option = e.target as HTMLDivElement;
        const value = getAttr(option, 'data-value');
        const title = getAttr(option, 'title');
        const desc = getAttr(option, 'data-desc');
        const optionItem: ISelectOption = {
            value: value,
            title: title,
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
                            {cloneReactChildren<ISelectOption>(children, {
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
        const {
            className,
            children,
            defaultValue = '',
            placeholder,
            value,
            onSelect,
            ...custom
        } = this.props;

        const selectActive = isOpen ? selectActiveClassName : '';
        const claNames = classNames(selectClassName, className, selectActive);

        return (
            <div ref={this.selectElm} className={claNames} {...(custom as any)}>
                <input
                    onClick={this.handleOnClickSelect}
                    ref={this.selectInput}
                    autoComplete="off"
                    placeholder={placeholder}
                    className={inputClassName}
                    value={option.title}
                    readOnly
                />
                <span className={selectArrowClassName}>
                    <Icon type={'chevron-down'} />
                </span>
            </div>
        );
    }
}
