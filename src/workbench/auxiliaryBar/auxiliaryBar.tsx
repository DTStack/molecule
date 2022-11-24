import React from 'react';
import { containerClassName } from './base';
import type { IAuxiliaryBar } from 'mo/model';

export default function AuxiliaryBar({ children }: IAuxiliaryBar) {
    return <div className={containerClassName}>{children}</div>;
}
