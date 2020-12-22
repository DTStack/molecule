import * as React from 'react';
import { memo } from 'react';
import { editorService } from 'mo';
import Tree, { ITreeProps } from 'mo/components/tree';

export interface SearchTreeProps extends ITreeProps {
    searchValue?: string;
}

const serviceProps = {
    onSelectFile: function (fileData) {
        const tabData = {
            ...fileData,
            activeTab: fileData.id,
            modified: false,
        };
        editorService.open(tabData, tabData.activeTab);
    }
};
const SearchTree: React.FunctionComponent<SearchTreeProps> = (props: SearchTreeProps) => {
    const { data, searchValue } = props;
    return <Tree
        prefixCls="rc-tree"
        data={data}
        renderTitle={(node, index) => {
            const { name } = node;
            const searchIndex = name.indexOf(searchValue);
            const beforeStr = name.substr(0, searchIndex);
            const afterStr = name.substr(searchIndex + searchValue?.length);
            const title =
                searchIndex > -1 ? (
                    <span>
                        {beforeStr}
                        <span style={{ color: '#ce9178' }}>{searchValue}</span>
                        {afterStr}
                    </span>
                ) : name;
            return title;
        }}
        onSelectFile={serviceProps.onSelectFile}
    />;
};
export default memo(SearchTree);
