import { useState } from 'react';

import Action from '../action';

export interface ICloseProps {
    className?: string;
    modified?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}

export default function Close({ className, modified, onClick }: ICloseProps) {
    const [hover, setHover] = useState(false);

    const dot = modified && !hover;

    return (
        <Action
            className={className}
            type={dot ? 'primitive-dot' : 'close'}
            onClick={onClick}
            data-modified={modified}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        />
    );
}
