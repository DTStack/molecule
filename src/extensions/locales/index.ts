import BaseExtension from 'mo/glue/baseExtension';
import { IContributeType, type UniqueId } from 'mo/types';

export class LocalesExtends implements BaseExtension {
    id: UniqueId = 'ExtendsLocales';
    name = 'Extends locales';
    contributes = {
        [IContributeType.Languages]: [],
    };
    activate(): void {
        console.log('test');
    }
}
