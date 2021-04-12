import { Controller } from 'mo/react/controller';
import React from 'react';
export interface IOutlineController {
}
export declare class OutlineController extends Controller implements IOutlineController {
    constructor();
    private initView;
    readonly onClick: (event: React.MouseEvent) => void;
}
