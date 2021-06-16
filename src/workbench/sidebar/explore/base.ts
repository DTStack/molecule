import {
    getBEMElement,
    getBEMModifier,
    prefixClaName,
} from 'mo/common/className';
import {
    ID_ACTIVITY_BAR,
    ID_SIDE_BAR,
    ID_EXPLORER,
    ID_FOLDER_TREE,
} from 'mo/common/id';

const defaultClassName = prefixClaName(ID_SIDE_BAR);
const defaultExplorerClassName = prefixClaName(ID_EXPLORER, defaultClassName);
const activityBarItemFloatClassName = getBEMModifier(
    getBEMElement(defaultExplorerClassName, ID_ACTIVITY_BAR),
    'float'
);

const folderTreeClassName = prefixClaName(ID_FOLDER_TREE);
const folderTreeInputClassName = getBEMModifier(folderTreeClassName, 'input');
const folderTreeEditClassName = getBEMModifier(folderTreeClassName, 'editable');

export {
    defaultExplorerClassName,
    activityBarItemFloatClassName,
    folderTreeClassName,
    folderTreeInputClassName,
    folderTreeEditClassName,
};
