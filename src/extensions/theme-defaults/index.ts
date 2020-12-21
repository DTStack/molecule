import { IColorTheme } from "mo/model/colorTheme";
import { IExtension, IExtensionType } from "mo/model/extension";

const colorThemesExtension: IExtension = require('./package.json');

function initColorTheme() {

    try {
    
        if (!colorThemesExtension || !colorThemesExtension.categories?.includes(IExtensionType.Theme)) {
            console.error('This is invalid colorTheme extension package!', colorThemesExtension);
        }
        
        const themes = colorThemesExtension.contributes?.themes?.map((theme: IColorTheme) => {
            if (theme.path) {
                const themeDetail = {}; // require(theme.path);
                return Object.assign({}, theme, themeDetail)
            }
            return theme;
        });
        
        if (!colorThemesExtension.contributes) {
            colorThemesExtension.contributes = { themes: [] };
        }
        
        colorThemesExtension.contributes.themes = themes;
    } catch (e) {
        throw new Error('Load color theme exception:' + e);
    }
}

initColorTheme();

export { 
    colorThemesExtension
}
