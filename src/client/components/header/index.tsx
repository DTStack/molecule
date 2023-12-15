import { CSSProperties, forwardRef, PropsWithChildren } from 'react';
import { classNames } from 'mo/client/classNames';
import { Direction } from 'mo/types';

import Display from '../display';
import Flex from '../flex';
import { type IScrollbarProps, IScrollRef, ScrollBar } from '../scrollBar';
import variables from './index.scss';

interface IHeaderProps {
    extra?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    extraClassName?: string;
    trackStyle?: CSSProperties;
    scrollIntoViewDeps?: IScrollbarProps['scrollIntoViewDeps'];
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
}

export default forwardRef<IScrollRef, PropsWithChildren<IHeaderProps>>(function Header(
    {
        className,
        contentClassName,
        extraClassName,
        extra,
        trackStyle,
        scrollIntoViewDeps,
        children,
        onClick,
        onContextMenu,
    },
    ref
) {
    return (
        <Flex
            className={classNames(variables.header, className)}
            onClick={onClick}
            onContextMenu={onContextMenu}
        >
            <div className={classNames(variables.content, contentClassName)}>
                <ScrollBar
                    scrollIntoViewDeps={scrollIntoViewDeps}
                    trackStyle={trackStyle}
                    direction={Direction.horizontal}
                    ref={ref}
                >
                    {children}
                </ScrollBar>
            </div>
            <Display visible={!!extra}>
                <Flex className={classNames(variables.extra, extraClassName)}>{extra}</Flex>
            </Display>
        </Flex>
    );
});
