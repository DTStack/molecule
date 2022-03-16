import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { Scrollbar, ScrollbarProps } from 'react-scrollbars-custom';
import { prefixClaName, classNames } from '@dtinsight/molecule-common';
export interface IScrollbarProps extends ScrollbarProps {
    isShowShadow?: boolean;
    trackStyle?: React.CSSProperties;
    thumbStyle?: React.CSSProperties;
}

const defaultScrollableClassName = prefixClaName('scrollbar');

/**
 * The react-scrollbars-custom component default not supports auto hide thumb option,
 * the below implementation from this issue:
 * https://github.com/xobotyi/react-scrollbars-custom/issues/46
 */
const Scrollable = forwardRef<Scrollbar, IScrollbarProps>(function (
    props,
    ref
) {
    const {
        className,
        children,
        isShowShadow,
        trackStyle,
        thumbStyle,
        ...restProps
    } = props;
    const scroller = useRef<Scrollbar>(null);

    useImperativeHandle(ref, () => scroller.current!);

    const [isScrolling, setIsScrolling] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
    const isShow = isScrolling || isMouseOver;

    const claNames = classNames(defaultScrollableClassName, className);

    const onScroll = useCallback(({ scrollTop }) => {
        /* istanbul ignore next */
        setScrollTop(scrollTop);
    }, []);

    const onScrollStart = useCallback(() => {
        setIsScrolling(true);
    }, []);
    const onScrollStop = useCallback(() => {
        /* istanbul ignore next */
        setIsScrolling(false);
    }, []);
    const onMouseEnter = useCallback(() => {
        setIsMouseOver(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setIsMouseOver(false);
    }, []);

    const trackProps = useMemo(
        () => ({
            renderer: ({ elementRef, style, ...restProps }: any) => {
                // [TODO]: I don't know how to code it in a perfect way
                restProps.children.props.style.background = '#bfbfbf66';
                return (
                    <span
                        {...restProps}
                        ref={elementRef}
                        style={{
                            ...style,
                            borderRadius: 0,
                            opacity: isShow ? 1 : 0,
                            transition: 'opacity 0.4s ease-in-out',
                            background: 'transparent',
                            ...trackStyle,
                        }}
                    />
                );
            },
        }),
        [isShow, trackStyle]
    );

    const thumbProps = useMemo(
        () => ({
            renderer: ({ elementRef, style, ...restProps }: any) => {
                return (
                    <div
                        {...restProps}
                        ref={elementRef}
                        style={{
                            ...style,
                            background: 'var(--scrollbarSlider-background)',
                            borderRadius: 0,
                            ...thumbStyle,
                        }}
                    />
                );
            },
        }),
        [isShow, thumbStyle]
    );

    return (
        <Scrollbar
            className={claNames}
            ref={scroller}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...(restProps as any)}
            wrapperProps={{
                renderer: ({ elementRef, style, key, ...restProps }) => {
                    return (
                        <div key={key}>
                            <div
                                {...restProps}
                                ref={elementRef}
                                style={{ ...style, right: 0 }}
                            />
                            {isShowShadow ? (
                                <div
                                    className={classNames(
                                        'shadow',
                                        'top',
                                        scrollTop > 0 && 'active'
                                    )}
                                />
                            ) : null}
                        </div>
                    );
                },
            }}
            trackXProps={trackProps}
            trackYProps={trackProps}
            thumbXProps={thumbProps}
            thumbYProps={thumbProps}
            onScrollStart={onScrollStart}
            onScrollStop={onScrollStop}
            onScroll={onScroll}
            scrollDetectionThreshold={500} // ms
        >
            {children}
        </Scrollbar>
    );
});

export { Scrollable };
