import { createContext } from 'react';
import { IContext } from 'mo/types';

export const Context = createContext<IContext>({} as any);
