/**
 * px = em * parentElementFontSize
 * @param em em value
 * TODO: Use Template Literal Types replace fontSize typing
 */
export function em2Px(em: number, fontSize: number): number {
    return em * fontSize;
}

/**
 * Apply css content to workbench
 * @param styleSheetContent CSS sheet content
 * @param rulesClassName Style tag class Name
 */
export function applyStyleSheetRules(
    styleSheetContent: string,
    rulesClassName: string
) {
    const themeStyles = document.head.getElementsByClassName(rulesClassName);
    if (themeStyles.length === 0) {
        const elStyle = document.createElement('style');
        elStyle.type = 'text/css';
        elStyle.className = rulesClassName;
        elStyle.innerHTML = styleSheetContent;
        document.head.appendChild(elStyle);
    } else {
        (<HTMLStyleElement>themeStyles[0]).innerHTML = styleSheetContent;
    }
}
