import React from 'react';

export interface IDisplayProps extends React.ComponentProps<'div'> {
    visible?: boolean;
}

const Display = (props: IDisplayProps) => {
    const { visible = true, children, className, style = {}, ...rest } = props;
    return (
        <div
            className={className}
            style={{ display: visible ? undefined : 'none', ...style }}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Display;
