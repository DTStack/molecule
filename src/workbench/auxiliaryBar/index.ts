import 'reflect-metadata';
import { connect } from 'mo/react';
import { container } from 'tsyringe';
import { AuxiliaryController } from 'mo/controller';
import { AuxiliaryService } from 'mo/services';
import { default as AuxiliaryBarView } from './auxiliaryBar';
import { default as AuxiliaryBarTabView } from './auxiliaryBarTab';

const auxiliaryService = container.resolve(AuxiliaryService);
const auxiliaryController = container.resolve(AuxiliaryController);

const AuxiliaryBar = connect(auxiliaryService, AuxiliaryBarView);

const AuxiliaryBarTab = connect(
    auxiliaryService,
    AuxiliaryBarTabView,
    auxiliaryController
);

export { AuxiliaryBar, AuxiliaryBarTab };
