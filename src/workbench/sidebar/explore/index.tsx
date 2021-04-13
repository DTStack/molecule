import 'reflect-metadata';
import { connect } from 'mo/react';
import { container } from 'tsyringe';
import { ExplorerService, FolderTreeService } from 'mo/services';
import { Explorer } from './explore';
import FolderTree from './folderTree';
import { ExplorerController } from 'mo/controller/explorer/explorer';
import { FolderTreeController } from 'mo/controller/explorer/folderTree';

const explorerService = container.resolve(ExplorerService);
const explorerController = container.resolve(ExplorerController);
const folderTreeService = container.resolve(FolderTreeService);
const folderTreeController = container.resolve(FolderTreeController);

const ExplorerView = connect(explorerService, Explorer, explorerController);
const FolderTreeView = connect(
    folderTreeService,
    FolderTree,
    folderTreeController
);
export { ExplorerView, Explorer, FolderTreeView, FolderTree };
