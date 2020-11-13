export type HTMLElementType = HTMLElement | null;
export const select = document.querySelector.bind(document);
export const selectAll = document.querySelectorAll.bind(document);

export interface IPosition {
    x: number;
    y: number;
}

/**
 * Get Document Rectangle info
 */
export function getDocumentRect() {
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const width = Math.max(
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
    );

    return {
        height,
        width,
    };
}

/**
 * Returns the position of element relative anchor's position
 * @param element target element
 * @param anchorPos anchor's position
 */
export function getRelativePosition(
    element: HTMLElement,
    anchorPos: IPosition
) {
    const page = getDocumentRect();
    const anchorX = anchorPos.x;
    const anchorY = anchorPos.y;

    const marginRight = page.width - anchorX;
    const marginBottom = page.height - anchorY;

    const viewHeight = element.offsetHeight;
    const viewWidth = element.offsetWidth;

    const x = marginRight < viewWidth ? anchorX - viewWidth : anchorX;
    const y = marginBottom < viewHeight ? anchorY - viewHeight : anchorY;

    return {
        x,
        y,
    };
}
