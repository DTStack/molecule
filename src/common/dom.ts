export type HTMLElementType = HTMLElement | null;
export type TriggerEvent = 'click' | 'contextmenu' | 'hover';
/**
 * specify `rightBottom` means align to the bottom and keep in right
 */
export type PlacementType = 'top' | 'right' | 'bottom' | 'left' | 'rightBottom';
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

    const clientWidth = html.clientWidth;
    const clientHeight = html.clientHeight;

    const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const width = Math.max(
        body.scrollWidth,
        body.offsetWidth,
        clientWidth,
        html.scrollWidth,
        html.offsetWidth
    );

    return {
        height,
        width,
        clientWidth,
        clientHeight,
    };
}

/**
 * Returns the position of element relative to element position
 * @param element target element
 * @param relativePos the relative element position
 */
export function getRelativePosition(
    element: HTMLElement,
    relativePos: IPosition
) {
    const { clientWidth, clientHeight } = getDocumentRect();
    const anchorX = relativePos.x;
    const anchorY = relativePos.y;

    const marginRight = clientWidth - anchorX;
    const marginBottom = clientHeight - anchorY;

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
        y: e.clientY,
    };
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
        case 'contextmenu': {
            return 'onContextMenu';
        }
        default: {
            return trigger;
        }
    }
}

/**
 * Get the element position by placement and DOMRect
 * @param placement top | right | bottom | left
 * @param domRect Dom rect info, normally get it from getBoundingClientRect function
 */
export function getPositionByPlacement(
    placement: PlacementType,
    domRect: DOMRect
): IPosition {
    let x = domRect.x; // Initial placement is top
    let y = domRect.y;

    if (placement === 'top') {
        y = domRect.y - domRect.height;
    } else if (placement === 'right') {
        x = domRect.x + domRect.width;
    } else if (placement === 'bottom') {
        y = domRect.y + domRect.height;
    } else if (placement === 'left') {
        x = domRect.x - domRect.width;
    } else if (placement === 'rightBottom') {
        x = domRect.x + domRect.width;
        y = domRect.y + domRect.height;
    }
    return { x, y };
}

export function getAttr(domElement: HTMLElement, attr) {
    return domElement.getAttribute(attr) || '';
}
