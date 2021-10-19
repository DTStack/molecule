import logger from 'mo/common/logger';
import 'reflect-metadata';
import { cloneDeep } from 'lodash';
import { singleton } from 'tsyringe';
import { constants, modules } from './const';

type IBuiltinModuleProps<T = any> = {
    id: string;
    module: T;
    active: boolean;
};

type IBuiltinConstantProps = {
    id: string;
    value: string;
    active: boolean;
};

export type IBuiltinProps = IBuiltinModuleProps & IBuiltinConstantProps;

export interface IBuiltinService {
    /**
     * @deprecated
     */
    inactiveConstant(id: keyof typeof constants): boolean;
    inactiveModule(id: keyof typeof modules): boolean;
    getConstant(id: keyof typeof constants): IBuiltinConstantProps | undefined;
    getConstants(): Partial<typeof constants>;
    getModule<T>(id: keyof typeof modules): IBuiltinModuleProps<T> | undefined;
    getModules(): Partial<typeof modules>;
    reset(): void;
}

@singleton()
export class BuiltinService implements IBuiltinService {
    private builtinConstants = new Map<string, IBuiltinConstantProps>();
    private builtinModules = new Map<string, IBuiltinModuleProps>();
    constructor() {
        this.initialize();
    }

    private initialize() {
        // register all built-in constants
        Object.keys(constants).forEach((key) => {
            this.addConstant({ id: key, value: constants[key] });
        });

        // register all built-in modules
        Object.keys(modules).forEach((module) => {
            this.addModules({ id: module, module: modules[module] });
        });
    }

    private addConstant(constant: { id: string; value: string }) {
        const uuid = constant.id;
        this.builtinConstants.set(uuid, {
            ...constant,
            active: true,
        });
    }

    private addModules<T>(module: { id: string; module: T }) {
        const uuid = module.id;
        this.builtinModules.set(uuid, {
            ...module,
            active: true,
        });
    }

    public getConstant(id: keyof typeof constants) {
        return this.builtinConstants.get(id);
    }

    public getConstants() {
        const res = {};
        this.builtinConstants.forEach((constant) => {
            if (constant.active) {
                res[constant.id] = constant.value;
            }
        });
        return res as Record<
            Partial<keyof typeof constants>,
            string | undefined
        >;
    }

    public inactiveConstant(id: keyof typeof constants) {
        const isExist = this.builtinConstants.has(id);
        if (!isExist) {
            logger.error(`Can't find constant which is ${id}`);
            return false;
        }
        const constant = this.builtinConstants.get(id)!;
        this.builtinConstants.set(constant.id, { ...constant, active: false });
        return true;
    }

    public inactiveModule(id: keyof typeof modules) {
        const isExist = this.builtinModules.has(id);
        if (!isExist) {
            logger.error(`Can't find module which is ${id}`);
            return false;
        }
        const module = this.builtinModules.get(id)!;
        this.builtinModules.set(module.id, { ...module, active: false });

        return true;
    }

    public getModule(id: keyof typeof modules) {
        return cloneDeep(this.builtinModules.get(id));
    }

    public getModules() {
        const res: Partial<typeof modules> = {};
        this.builtinModules.forEach((constant) => {
            if (constant.active) {
                res[constant.id] = cloneDeep(constant.module);
            }
        });
        return res;
    }

    public reset() {
        this.builtinModules.clear();
        this.builtinConstants.clear();
        this.initialize();
    }
}

export default BuiltinService;
