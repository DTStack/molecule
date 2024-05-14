import { classNames } from 'mo/client/classNames';
import { Input, ScrollBar, Text, Tree } from 'mo/client/components';
import { useConnector, useLocale } from 'mo/client/hooks';
import type { ISearchController } from 'mo/controllers/search';
import { matchKeyword } from 'mo/utils';

import variables from './index.scss';

export type ISearchProps = ISearchController;

export default function Search({ onChange, onSearch, onEnter, onSelect }: ISearchProps) {
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
                autoFocus
                defaultValue={search.value}
                value={search.value}
                className={classNames(variables.widget)}
                info={search.validateInfo}
                placeholder={placeholder}
                onChange={handleChange}
                onSubmit={onEnter}
            />
            {empty ? (
                <span className={variables.notFound}>
                    {localize(builtin.constants.SEARCH_ITEM_NOT_FOUND, 'No results found.')}
                </span>
            ) : (
                <ScrollBar isShowShadow>
                    <Tree
                        className={variables.result}
                        expandedKeys={search.expandedKeys}
                        data={search.result}
                        onSelect={onSelect}
                        draggable={false}
                        renderTitle={(node) => {
                            if (node.fileType === 'File') {
                                const val = search.value;

                                const rows = node.name.split('\n');
                                const curRow = rows.find((r) =>
                                    r.toLocaleLowerCase().includes(val.toLocaleLowerCase())
                                );

                                if (!curRow) return node.name;

                                return (
                                    <span title={node.name}>
                                        <Text highlight={val}>{matchKeyword(curRow, val)}</Text>
                                    </span>
                                );
                            }
                            return node.name;
                        }}
                    />
                </ScrollBar>
            )}
        </section>
    );
}
