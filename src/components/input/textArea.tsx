import * as React from 'react';
import RcTextArea, { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import { useEffect, useRef } from 'react';
import { omit } from 'lodash';

import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { fixControlledValue, inputClassName, resolveOnChange } from './input';

export interface TextAreaProps extends RcTextAreaProps {
    showCount?: boolean;
    maxLength?: number;
    onChange?: (e) => void;
}

const textAreaClassName = getBEMElement(inputClassName, 'textarea');
const showCountClassName = getBEMModifier(textAreaClassName, 'show-count');

export const TextArea = ({
    showCount = false,
    maxLength,
    className,
    style,
    onChange,
    ...props
}: TextAreaProps) => {
    const innerRef = useRef(null);

    const [value, setValue] = useMergedState(props.defaultValue, {
        value: props.value,
    });

    const prevValue = useRef(props.value);

    useEffect(() => {
        if (props.value !== undefined || prevValue.current !== props.value) {
            setValue(props.value);
            prevValue.current = props.value;
        }
    }, [props.value, prevValue.current]);

    const handleSetValue = (val: string) => {
        if (props.value === undefined) {
            setValue(val);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetValue(e.target.value);
        resolveOnChange(innerRef.current!, e, onChange);
    };

    const otherProps = omit(props, ['value']);

    const textArea = (
        <RcTextArea
            {...otherProps}
            value={value}
            maxLength={maxLength}
            className={classNames(className && !showCount ? [className!] : '')}
            style={showCount ? {} : style}
            prefixCls={inputClassName}
            onChange={handleChange}
            ref={innerRef}
        />
    );

    let val = fixControlledValue(value) as string;
    const hasMaxLength = Number(maxLength) > 0;
    val = hasMaxLength ? [...val].slice(0, maxLength).join('') : val;
    // Only show text area wrapper when needed
    if (showCount) {
        const valueLength = [...val].length;
        const dataCount = `${valueLength}${
            hasMaxLength ? ` / ${maxLength}` : ''
        }`;

        return (
            <div
                className={classNames(
                    className,
                    textAreaClassName,
                    showCountClassName
                )}
                style={style}
                data-count={dataCount}
            >
                {textArea}
            </div>
        );
    }
    return textArea;
};
