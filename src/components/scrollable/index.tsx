import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { Scrollbar, ScrollbarProps } from 'react-scrollbars-custom';
import { prefixClaName, classNames } from 'mo/common/className';
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
const Scrollable = React.forwardRef<Scrollbar, IScrollbarProps>(function (
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
    const scroller = React.useRef<Scrollbar>(null);

    React.useImperativeHandle(ref, () => scroller.current!);

    const [isScrolling, setIsScrolling] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    /* istanbul ignore next */
    const isShow = isScrolling || isMouseOver;

    const claNames = classNames(defaultScrollableClassName, className);

    const onScrollStart = useCallback(() => {
        /* istanbul ignore next */
        setIsScrolling(true);
    }, []);
    const onScrollStop = useCallback(() => {
        /* istanbul ignore next */
        setIsScrolling(false);
    }, []);
    const onMouseEnter = useCallback(() => {
        /* istanbul ignore next */
        setIsMouseOver(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        /* istanbul ignore next */
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
                            opacity:
                                /* istanbul ignore next */
                                isShow ? 1 : 0,
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
                    const currentTop = scroller.current?.scrollTop || 0;
                    return (
                        <React.Fragment key={key}>
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
                                        /* istanbul ignore next */
                                        isShowShadow &&
                                            currentTop > 0 &&
                                            'active'
                                    )}
                                />
                            ) : null}
                        </React.Fragment>
                    );
                },
            }}
            trackXProps={trackProps}
            trackYProps={trackProps}
            thumbXProps={thumbProps}
            thumbYProps={thumbProps}
            onScrollStart={onScrollStart}
            onScrollStop={onScrollStop}
            scrollDetectionThreshold={500} // ms
        >
            {children}
        </Scrollbar>
    );
});

export { Scrollable };
