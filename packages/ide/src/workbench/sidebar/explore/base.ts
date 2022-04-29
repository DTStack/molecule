import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from '@dtinsight/molecule-common';
import {
    ID_ACTIVITY_BAR,
    ID_SIDE_BAR,
    ID_EXPLORER,
    ID_FOLDER_TREE,
    ID_EDITOR_TREE,
} from '@dtinsight/molecule-common';

const defaultClassName = prefixClaName(ID_SIDE_BAR);
const defaultExplorerClassName = prefixClaName(ID_EXPLORER, defaultClassName);
const activityBarItemFloatClassName = getBEMModifier(
    getBEMElement(defaultExplorerClassName, ID_ACTIVITY_BAR),
    'float'
);

const folderTreeClassName = prefixClaName(ID_FOLDER_TREE);
const folderTreeInputClassName = getBEMModifier(folderTreeClassName, 'input');
const folderTreeEditClassName = getBEMModifier(folderTreeClassName, 'editable');

const editorTreeClassName = prefixClaName(ID_EDITOR_TREE);
const editorTreeItemClassName = getBEMElement(editorTreeClassName, 'item');
const editorTreeGroupClassName = getBEMElement(editorTreeClassName, 'group');
const editorTreeFileNameClassName = getBEMElement(
    editorTreeItemClassName,
    'fileName'
);
const editorTreeFilePathClassName = getBEMElement(
    editorTreeItemClassName,
    'filePath'
);
const editorTreeActiveItemClassName = getBEMModifier(
    editorTreeItemClassName,
    'active'
);
const editorTreeCloseIconClassName = getBEMElement(
    editorTreeClassName,
    'close'
);
const editorTreeFileIconClassName = getBEMElement(editorTreeClassName, 'file');

export {
    defaultExplorerClassName,
    activityBarItemFloatClassName,
    folderTreeClassName,
    folderTreeInputClassName,
    folderTreeEditClassName,
    editorTreeClassName,
    editorTreeItemClassName,
    editorTreeGroupClassName,
    editorTreeFileNameClassName,
    editorTreeFilePathClassName,
    editorTreeActiveItemClassName,
    editorTreeCloseIconClassName,
    editorTreeFileIconClassName,
};
