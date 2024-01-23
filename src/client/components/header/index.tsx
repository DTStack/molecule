import { CSSProperties, PropsWithChildren } from 'react';
import useMeasure from 'react-use/esm/useMeasure';
import { classNames } from 'mo/client/classNames';
import { Direction } from 'mo/types';

import Display from '../display';
import Flex from '../flex';
import ScrollBar, { type IScrollbarProps } from '../scrollBar';
import variables from './index.scss';

export interface IHeaderProps {
    extra?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    extraClassName?: string;
    trackStyle?: CSSProperties;
    scrollIntoViewDeps?: IScrollbarProps['scrollIntoViewDeps'];
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Header({
    className,
    contentClassName,
    extraClassName,
    extra,
    trackStyle,
    scrollIntoViewDeps,
    children,
    onClick,
    onContextMenu,
}: PropsWithChildren<IHeaderProps>) {
    const [container, { width }] = useMeasure<HTMLDivElement>();
    const [extraRef, { width: extraWidth }] = useMeasure<HTMLDivElement>();

    return (
        <Flex
            className={classNames(variables.header, className)}
            onClick={onClick}
            onContextMenu={onContextMenu}
            ref={container}
        >
            <div
                className={classNames(variables.content, contentClassName)}
                style={{ width: width - extraWidth - 16 * 2 }}
            >
                <ScrollBar
                    scrollIntoViewDeps={scrollIntoViewDeps}
                    trackStyle={trackStyle}
                    direction={Direction.horizontal}
                >
                    <Flex alignItems="center" justifyContent="start" className={variables.wrapper}>
                        {children}
                    </Flex>
                </ScrollBar>
            </div>
            <Display visible={!!extra}>
                <Flex ref={extraRef} className={classNames(variables.extra, extraClassName)}>
                    {extra}
                </Flex>
            </Display>
        </Flex>
    );
}
