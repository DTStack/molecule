import 'reflect-metadata';
import { connect } from 'mo/react';
import { container } from 'tsyringe';
import { AuxiliaryController } from 'mo/controller';
import { AuxiliaryBarService } from 'mo/services';
import { default as AuxiliaryBarView } from './auxiliaryBar';
import { default as AuxiliaryBarTabView } from './auxiliaryBarTab';

const auxiliaryService = container.resolve(AuxiliaryBarService);
const auxiliaryController = container.resolve(AuxiliaryController);

const AuxiliaryBar = connect(auxiliaryService, AuxiliaryBarView);

const AuxiliaryBarTab = connect(
    auxiliaryService,
    AuxiliaryBarTabView,
    auxiliaryController
);

export { AuxiliaryBar, AuxiliaryBarTab };
