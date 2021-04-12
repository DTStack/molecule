/**
 * px = em * parentElementFontSize
 * @param em em value
 * TODO: Use Template Literal Types replace fontSize typing
 */
export declare function em2Px(em: number, fontSize: number): number;
/**
 * Apply css content to workbench
 * @param styleSheetContent CSS sheet content
 * @param rulesClassName Style tag class Name
 */
export declare function applyStyleSheetRules(styleSheetContent: string, rulesClassName: string): void;
