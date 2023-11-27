import type { CSSProperties, PropsWithChildren } from 'react';
import { classNames } from 'mo/client/classNames';
import { Direction } from 'mo/types';

import Flex from '../flex';
import { ScrollBar } from '../scrollBar';
import variables from './index.scss';

interface IHeaderProps {
    extra?: React.ReactNode;
    className?: string;
    contentClassName?: string;
    extraClassName?: string;
    trackStyle?: CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Header({
    className,
    contentClassName,
    extraClassName,
    extra,
    trackStyle,
    children,
    onClick,
    onContextMenu,
}: PropsWithChildren<IHeaderProps>) {
    return (
        <Flex
            className={classNames(variables.header, className)}
            onClick={onClick}
            onContextMenu={onContextMenu}
        >
            <div className={classNames(variables.content, contentClassName)}>
                <ScrollBar trackStyle={trackStyle} direction={Direction.horizontal}>
                    {children}
                </ScrollBar>
            </div>
            {!!extra && (
                <Flex className={classNames(variables.extra, extraClassName)}>{extra}</Flex>
            )}
        </Flex>
    );
}
