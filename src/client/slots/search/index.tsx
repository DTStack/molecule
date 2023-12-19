import { classNames } from 'mo/client/classNames';
import { ScrollBar } from 'mo/client/components/scrollBar';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import { ISearchController } from 'mo/controllers/search';

import { Input } from '../../components/input';
import Tree from '../../components/tree';
import variables from './index.scss';

export default function Search({ onChange, onSearch, onSelect }: ISearchController) {
    const builtin = useConnector('builtin');
    const search = useConnector('search');
    const localize = useLocale();

    const placeholder = localize(builtin.constants.SIDEBAR_ITEM_SEARCH, 'Search');

    const handleChange = (value: string) => {
        onChange?.(value);
        onSearch?.(value);
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
                onSubmit={handleChange}
            />
            {empty ? (
                <span className={variables.notFound}>
                    {localize(builtin.constants.SEARCH_ITEM_NOT_FOUND, 'No results found.')}
                </span>
            ) : (
                <ScrollBar isShowShadow>
                    <Tree
                        className={variables.result}
                        expandedKeys={search.expandKeys}
                        data={search.result}
                        onSelect={onSelect}
                        renderTitle={(node) => node.name}
                    />
                </ScrollBar>
            )}
        </section>
    );
}
