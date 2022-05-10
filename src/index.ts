import * as moleculeAPI from './molecule.api';

import { molecule } from './provider/create';

export { Workbench } from 'mo/workbench/workbench';
export { create } from 'mo/provider';

// TODO: put API into moleucle temporarily, should consider it
export default Object.assign(molecule, moleculeAPI);
