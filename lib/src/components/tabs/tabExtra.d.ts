import * as React from 'react';
export interface TabExtraProps {
    modified?: boolean;
    active?: boolean;
    buttonHover?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    classNames?: string;
}
export default function TabExtra({ classNames, modified, onClick, active, buttonHover, }: TabExtraProps): JSX.Element;
