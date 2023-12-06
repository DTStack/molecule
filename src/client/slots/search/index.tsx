import { classNames } from 'mo/client/classNames';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import { ISearchController } from 'mo/controllers/search';
import { SearchResultItem } from 'mo/types';

import { Input } from '../../components/input';
import Tree from '../../components/tree';
import variables from './index.scss';

export default function Search({ onChange, onSearch, onResultClick }: ISearchController) {
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
                info={search.validateInfo}
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
