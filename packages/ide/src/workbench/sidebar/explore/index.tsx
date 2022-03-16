import 'reflect-metadata';
import { connect } from '@dtinsight/molecule-glue';
import { container } from 'tsyringe';
import { FolderTreeService } from 'mo/services';
import { Explorer } from './explore';
import FolderTree from './folderTree';
import { FolderTreeController } from 'mo/controller/explorer/folderTree';
import { EditorTree } from './editorTree';

const folderTreeService = container.resolve(FolderTreeService);
const folderTreeController = container.resolve(FolderTreeController);

const FolderTreeView = connect(
    folderTreeService,
    FolderTree,
    folderTreeController
);

export { Explorer, FolderTreeView, FolderTree, EditorTree };
