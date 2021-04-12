import * as React from 'react';
import { ITreeProps } from 'mo/components/tree';
export interface SearchTreeProps extends ITreeProps {
    value?: string;
    isCaseSensitive?: boolean;
    isWholeWords?: boolean;
    isRegex?: boolean;
}
declare const _default: React.NamedExoticComponent<SearchTreeProps>;
export default _default;
