import { ExplorerController } from 'mo/controller/explorer/explorer';
import { FolderTreeController } from 'mo/controller/explorer/folderTree';
import { connect } from 'mo/react';
import { explorerService } from 'mo/services';
import { container } from 'tsyringe';
import { Explorer } from './explore';
import FolderTree from './folderTree'

const explorerController = container.resolve(ExplorerController);
const folderTreeController = container.resolve(FolderTreeController);
const ExplorerView = connect(explorerService, Explorer, explorerController);
const FolderTreeView = connect(explorerService, FolderTree, folderTreeController);
export { ExplorerView, Explorer, FolderTreeView, FolderTree };
