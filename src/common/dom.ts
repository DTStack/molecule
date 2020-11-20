export type HTMLElementType = HTMLElement | null;
export type TriggerEvent = 'click' | 'contextmenu' | 'hover';
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
 * Returns the position of element relative to element position
 * @param element target element
 * @param relatedPos the relative element position
 */
export function getRelativePosition(
    element: HTMLElement,
    relativePos: IPosition
) {
    const page = getDocumentRect();
    const anchorX = relativePos.x;
    const anchorY = relativePos.y;

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

export function getEventPosition(e: React.MouseEvent) {
    return {
        x: e.clientX,
        y: e.clientY
    }
}

export function findParentByClassName<T>(element, className): T | null {
    try {
        while (element && element) {
            const classes = element.getAttribute('class');
            if (classes && classes.indexOf(className) > -1) {
                return element;
            }
            element = element.parentElement;
        }
    } catch (e) {
        throw new Error(e);
    }
    return null;
}

export function triggerEvent(trigger: TriggerEvent) {
    switch (trigger) {
        case 'click': {
            return 'onClick';
        }
        case 'hover': {
            return 'onMouseOver';
        }
        default: {
            return trigger;
        }
    }
}
