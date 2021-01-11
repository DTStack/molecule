import { ExplorerController } from 'mo/controller/explorer/explorer';
import { connect } from 'mo/react';
import { explorerService } from 'mo/services';
import { container } from 'tsyringe';
import { Explorer } from './explore';

export { default as FolderTree } from './folderTree';

const explorerController = container.resolve(ExplorerController);
const ExplorerView = connect(explorerService, Explorer, explorerController);

export { ExplorerView, Explorer };
