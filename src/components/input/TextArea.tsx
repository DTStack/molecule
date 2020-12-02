import * as React from 'react';
import RcTextArea, { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import { useEffect, useRef } from 'react';

import { classNames, prefixClaName } from 'mo/common/className';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import { fixControlledValue, resolveOnChange } from './input';

export interface TextAreaProps extends RcTextAreaProps {
    bordered?: boolean;
    showCount?: boolean;
    maxLength?: number;
    onChange?: (e) => void;
}

const TextArea = ({
    bordered = true,
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

    const handleSetValue = (val: string, callback?: () => void) => {
        if (props.value === undefined) {
            setValue(val);
            callback?.();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleSetValue(e.target.value);
        resolveOnChange(innerRef.current!, e, onChange);
    };

    const prefixCls = prefixClaName('mo-input');

    const textArea = (
        <RcTextArea
            {...props}
            maxLength={maxLength}
            className={classNames({
                [`${prefixCls}-textarea--borderless`]: !bordered,
                [className!]: className && !showCount,
            })}
            style={showCount ? {} : style}
            prefixCls={prefixCls}
            onChange={handleChange}
            ref={innerRef}
        />
    );

    let val = fixControlledValue(value) as string;
    // Max length value
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
                    `${prefixCls}-textarea`,
                    `${prefixCls}-textarea--show-count`,
                    className
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

export default TextArea;
