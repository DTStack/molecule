import 'mo/workbench/sidebar/explore/style.scss';
import { connect } from 'mo/react';
import { explorerService } from 'mo/services';
import { explorerController, folderTreeController } from 'mo/controller';
import { Explorer } from './explore';
import FolderTree from './folderTree';

const ExplorerView = connect(explorerService, Explorer, explorerController);
const FolderTreeView = connect(
    explorerService,
    FolderTree,
    folderTreeController
);
export { ExplorerView, Explorer, FolderTreeView, FolderTree };
