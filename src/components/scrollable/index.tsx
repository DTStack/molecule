import './style.scss';
import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { Scrollbar, ScrollbarProps } from 'react-scrollbars-custom';
import { prefixClaName, classNames } from 'mo/common/className';

interface IScrollbar extends ScrollbarProps {
    autoHideThumb?: boolean;
}

const defaultSrollableClassName = 'scrollable';

/**
 * The react-scrollbars-custom component default not supports auto hide thumb option,
 * the below implementation from this issue:
 * https://github.com/xobotyi/react-scrollbars-custom/issues/46
 */
export function Scrollable(props: IScrollbar) {
    const { className, children, ...custom } = props;

    const [isScrolling, setIsScrolling] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const isShow = isScrolling || isMouseOver;

    const claNames = classNames(
        prefixClaName(defaultSrollableClassName),
        className
    );

    const onScrollStart = useCallback(() => {
        setIsScrolling(true);
    }, []);
    const onScrollStop = useCallback(() => {
        setIsScrolling(false);
    }, []);
    const onMouseEnter = useCallback(() => {
        setIsMouseOver(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setIsMouseOver(false);
    }, []);

    const trackProps = useMemo(() => ({
        renderer: ({ elementRef, style, ...restProps }: any) => (
            <span
                {...restProps}
                ref={elementRef}
                style={{
                    ...style, opacity: isShow ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out", 
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}/>
            )
    }), [isShow, onMouseEnter, onMouseLeave]);

    return (
        <Scrollbar 
            className={claNames} {...custom as any}
            wrapperProps={{
            renderer: ({ elementRef, style, ...restProps }: any) => (
                <div {...restProps} ref={elementRef} style={{ ...style, right: 0 }} />
            ),
            }}
            trackXProps={trackProps}
            trackYProps={trackProps}
            onScrollStart={onScrollStart}
            onScrollStop={onScrollStop}
            scrollDetectionThreshold={500} // ms
        >
            { children }
        </Scrollbar>
    )
}
