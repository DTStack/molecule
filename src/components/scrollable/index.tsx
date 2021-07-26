import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { Scrollbar, ScrollbarProps } from 'react-scrollbars-custom';
import { prefixClaName, classNames } from 'mo/common/className';

export interface IScrollbarProps extends ScrollbarProps {
    autoHideThumb?: boolean;
    isShowShadow?: boolean;
    trackStyle?: React.CSSProperties;
}

const defaultSrollableClassName = prefixClaName('scrollbar');

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
        isShowShadow = false,
        trackStyle,
        ...custom
    } = props;
    const scroller = React.useRef<Scrollbar>(null);

    React.useImperativeHandle(ref, () => scroller.current!);

    const [isScrolling, setIsScrolling] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const isShow = isScrolling || isMouseOver;

    const claNames = classNames(defaultSrollableClassName, className);

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

    return (
        <Scrollbar
            className={claNames}
            ref={scroller}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...(custom as any)}
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
                            <div
                                className={classNames(
                                    'shadow',
                                    'top',
                                    isShowShadow && currentTop > 0 && 'active'
                                )}
                            />
                        </React.Fragment>
                    );
                },
            }}
            trackXProps={trackProps}
            trackYProps={trackProps}
            onScrollStart={onScrollStart}
            onScrollStop={onScrollStop}
            scrollDetectionThreshold={500} // ms
        >
            {children}
        </Scrollbar>
    );
});

export { Scrollable };
