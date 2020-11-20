/**
 * px = em * parentElementFontSize
 * @param em em value
 * TODO: Use Template Literal Types replace fontSize typing
 */
export function em2Px(em: number, fontSize: number): number {
    return em * fontSize;
}
