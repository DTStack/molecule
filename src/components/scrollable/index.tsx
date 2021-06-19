import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { Scrollbar, ScrollbarProps } from 'react-scrollbars-custom';
import { prefixClaName, classNames } from 'mo/common/className';

export interface IScrollbarProps extends ScrollbarProps {
    autoHideThumb?: boolean;
    isShowShadow?: boolean;
}

const defaultSrollableClassName = prefixClaName('scrollbar');

/**
 * The react-scrollbars-custom component default not supports auto hide thumb option,
 * the below implementation from this issue:
 * https://github.com/xobotyi/react-scrollbars-custom/issues/46
 */
export function Scrollable(props: IScrollbarProps) {
    const { className, children, isShowShadow = false, ...custom } = props;
    const scroller = React.useRef<Scrollbar>(null);

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
            renderer: ({ elementRef, style, ...restProps }: any) => (
                <span
                    {...restProps}
                    ref={elementRef}
                    style={{
                        ...style,
                        opacity: isShow ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out',
                    }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                />
            ),
        }),
        [isShow, onMouseEnter, onMouseLeave]
    );

    return (
        <Scrollbar
            className={claNames}
            ref={scroller}
            {...(custom as any)}
            wrapperProps={{
                renderer: ({ elementRef, style, ...restProps }) => {
                    const currentTop = scroller.current?.scrollTop || 0;
                    return (
                        <>
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
                        </>
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
}
