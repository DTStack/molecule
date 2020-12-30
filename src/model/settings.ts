import { injectable } from 'tsyringe';

export interface ISettings {}
@injectable()
export class SettingModel implements ISettings {}
