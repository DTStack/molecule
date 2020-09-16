import { IExtension, IExtensionType } from '@/common/extension';
import { defaultExtensions } from '@/extensions';

// import { ThemeService } from './themeServices';

export class ExtensionService {
    public getAll(extensions: IExtension[]): IExtension[] {
        const defaultExtends = this.load(extensions);
        return defaultExtends;
    }

    public load(extensions: IExtension[]): IExtension[] {
        const exts: IExtension[] = [];
        for (let i = 0; i < defaultExtensions.length; i++) {
            const extension = extensions[i];
            if (!extension) continue;
            // Contributes are defined in vscode, used to supply features to vscode
            const contributes = Object.keys(extension.contributes);

            contributes.forEach((type: string) => {
                if (type === IExtensionType.Theme) {
                    // ThemeService.load(extension[type]);
                    exts.push(extension);
                }
            });
        }
        return exts;
    }
}
