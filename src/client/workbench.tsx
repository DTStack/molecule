import { createContext } from 'react';

import AuxiliaryBar from './slots/auxiliaryBar';

export type IContext = any;

export const Context = createContext<IContext>({});

export default function Workbench({ molecule }: any) {
    return (
        <Context.Provider value={{ molecule }}>
            workbench12
            <AuxiliaryBar />
        </Context.Provider>
    );
}
