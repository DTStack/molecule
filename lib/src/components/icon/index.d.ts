import * as React from 'react';
import 'vscode-codicons/dist/codicon.css';
export interface IIcon extends HTMLElementProps {
    type: string;
    onClick?: (e: React.MouseEvent) => void;
}
export declare function Icon(props: IIcon): React.ReactElement;
