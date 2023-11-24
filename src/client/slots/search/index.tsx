import { classNames } from 'mo/client/classNames';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import { InputValidateInfo, SearchResultItem } from 'mo/types';

import { Input } from '../../components/input';
import Tree from '../../components/tree';
import variables from './index.scss';

export interface ISearchProps {
    className?: string;
    expandKeys?: [];
    validateInfo?: InputValidateInfo;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    onResultClick?: (item: SearchResultItem) => void;
}

export const Search = ({ validateInfo, onChange, onSearch, onResultClick }: ISearchProps) => {
    const builtin = useConnector('builtin');
    const search = useConnector('search');
    const localize = useLocale();

    const placeholder = localize(builtin.constants.SEARCH_ACTIVITY_ITEM, 'Search');

    const handleChange = (value: string) => {
        onChange?.(value);
        onSearch?.(value);
    };

    const handleSelectFile = (node: SearchResultItem) => {
        onResultClick?.(node);
    };

    return (
        <>
            <Input
                className={classNames(variables.search)}
                info={validateInfo}
                placeholder={placeholder}
                onChange={handleChange}
            />

            <div style={{ height: '100%' }}>
                <Tree
                    expandKeys={search.expandKeys}
                    data={search.result}
                    onSelect={handleSelectFile}
                    renderTitle={(node) => node.name}
                />
            </div>
        </>
    );
};
