import { classNames } from 'mo/client/classNames';
import { ScrollBar } from 'mo/client/components/scrollBar';
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

    const empty = search.value && !search.result.length;

    return (
        <section className={variables.container}>
            <Input
                value={search.value}
                className={classNames(variables.widget)}
                info={search.validateInfo}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {empty ? (
                <span className={variables.notFound}>
                    {localize(builtin.constants.SEARCH_RESULT_NOT_FOUND, 'No results found.')}
                </span>
            ) : (
                <ScrollBar isShowShadow>
                    <Tree
                        className={variables.result}
                        expandKeys={search.expandKeys}
                        data={search.result}
                        onSelect={handleSelectFile}
                        renderTitle={(node) => node.name}
                    />
                </ScrollBar>
            )}
        </section>
    );
}
