"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyStyleSheetRules = exports.em2Px = void 0;
/**
 * px = em * parentElementFontSize
 * @param em em value
 * TODO: Use Template Literal Types replace fontSize typing
 */
function em2Px(em, fontSize) {
    return em * fontSize;
}
exports.em2Px = em2Px;
/**
 * Apply css content to workbench
 * @param styleSheetContent CSS sheet content
 * @param rulesClassName Style tag class Name
 */
function applyStyleSheetRules(styleSheetContent, rulesClassName) {
    var themeStyles = document.head.getElementsByClassName(rulesClassName);
    if (themeStyles.length === 0) {
        var elStyle = document.createElement('style');
        elStyle.type = 'text/css';
        elStyle.className = rulesClassName;
        elStyle.innerHTML = styleSheetContent;
        document.head.appendChild(elStyle);
    }
    else {
        themeStyles[0].innerHTML = styleSheetContent;
    }
}
exports.applyStyleSheetRules = applyStyleSheetRules;
//# sourceMappingURL=css.js.map