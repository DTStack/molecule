import './style.scss';
import * as React from 'react';
import { useRef, useState, Children, isValidElement, useEffect } from 'react';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';
import { cloneReactChildren } from 'mo/react';
import { useContextView } from 'mo/components/contextview';

import { ISelectOption } from './option';
import { Icon } from '../icon';

export interface ISelect {
    value?: string;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    prefix?: ReactNode;
    showArrow?: boolean;
    children?: ReactNode;
    onSelect?(e: React.MouseEvent, selectedOption?: ISelectOption): void;
}

export const selectClassName = prefixClaName('select');
const containerClassName = getBEMElement(selectClassName, 'container');
const selectOptionsClassName = getBEMElement(selectClassName, 'options');
const selectDescriptorClassName = getBEMElement(selectClassName, 'descriptor');
const inputClassName = getBEMElement(selectClassName, 'input');
const selectActiveClassName = getBEMModifier(selectClassName, 'active');
const selectArrowClassName = getBEMElement(selectClassName, 'arrow');

export function Select(props: ISelect) {
    const {
        className,
        children,
        defaultValue = '',
        placeholder,
        value,
        title,
        onSelect,
        ...custom
    } = props;

    const contextView = useContextView({
        shadowOutline: false,
    });

    const defaultSelectedOption: ISelectOption = {};
    const options = Children.toArray(children);
    for (const option of options) {
        if (isValidElement(option)) {
            const optionProps = option.props as ISelectOption;
            if (optionProps.value && optionProps.value === defaultValue) {
                defaultSelectedOption.title = optionProps.children as string;
                defaultSelectedOption.value = optionProps.value;
                break;
            }
        }
    }

    const selectElm = useRef<HTMLDivElement>(null);
    const selectInput = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(defaultSelectedOption);

    const handleOnClickOption = (e: React.MouseEvent) => {
        const option = e.target as HTMLDivElement;
        const value = option.getAttribute('data-value');
        const title = option.getAttribute('title');
        const desc = option.getAttribute('data-desc');
        const optionItem = {
            value: value!,
            title: title!,
            description: desc!,
        };

        setInputValue(optionItem);
        onSelect?.(e, optionItem);
        setIsOpen(false);
        contextView.hide();
    };

    const handOnHoverOption = (e: React.MouseEvent) => {
        const option = e.target as HTMLDivElement;
        const desc = option.getAttribute('data-desc');
        const descriptor = contextView.view!.querySelector(
            '.' + selectDescriptorClassName
        );
        if (descriptor) {
            const content = desc || 'None';
            descriptor.innerHTML = content;
            descriptor.setAttribute('title', content);
        }
    };

    const events = {
        onClick: (e: React.MouseEvent) => {
            const select = selectElm.current;
            if (select) {
                const selectRect = select?.getBoundingClientRect();
                selectRect.y = selectRect.y + selectRect.height;
                setIsOpen(true);

                contextView.show(selectRect, () => {
                    return (
                        <div
                            style={{
                                width: selectRect.width,
                            }}
                            className={classNames(
                                containerClassName,
                                selectActiveClassName
                            )}
                            onMouseOver={handOnHoverOption}
                        >
                            <div className={selectOptionsClassName}>
                                {cloneReactChildren<ISelectOption>(children, {
                                    onClick: handleOnClickOption,
                                })}
                            </div>
                            <div className={selectDescriptorClassName}>
                                None
                            </div>
                        </div>
                    );
                });
            }
        },
    };

    const selectActive = isOpen ? selectActiveClassName : '';
    const claNames = classNames(selectClassName, className, selectActive);

    useEffect(() => {
        contextView.onHide(() => {
            setIsOpen(false);
        });

        return () => {
            contextView.dispose();
        };
    }, [isOpen, inputValue]);

    return (
        <div ref={selectElm} className={claNames} {...(custom as any)}>
            <input
                {...events}
                ref={selectInput}
                autoComplete="off"
                placeholder={placeholder}
                className={inputClassName}
                value={inputValue.title}
                readOnly
            >
                {title}
            </input>
            <span className={selectArrowClassName}>
                <Icon type={'chevron-down'} />
            </span>
        </div>
    );
}
