"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttr = exports.getPositionByPlacement = exports.triggerEvent = exports.findParentByClassName = exports.getEventPosition = exports.getRelativePosition = exports.getDocumentRect = exports.selectAll = exports.select = void 0;
exports.select = document.querySelector.bind(document);
exports.selectAll = document.querySelectorAll.bind(document);
/**
 * Get Document Rectangle info
 */
function getDocumentRect() {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    return {
        height: height,
        width: width,
    };
}
exports.getDocumentRect = getDocumentRect;
/**
 * Returns the position of element relative to element position
 * @param element target element
 * @param relativePos the relative element position
 */
function getRelativePosition(element, relativePos) {
    var page = getDocumentRect();
    var anchorX = relativePos.x;
    var anchorY = relativePos.y;
    var marginRight = page.width - anchorX;
    var marginBottom = page.height - anchorY;
    var viewHeight = element.offsetHeight;
    var viewWidth = element.offsetWidth;
    var x = marginRight < viewWidth ? anchorX - viewWidth : anchorX;
    var y = marginBottom < viewHeight ? anchorY - viewHeight : anchorY;
    return {
        x: x,
        y: y,
    };
}
exports.getRelativePosition = getRelativePosition;
function getEventPosition(e) {
    return {
        x: e.clientX,
        y: e.clientY,
    };
}
exports.getEventPosition = getEventPosition;
function findParentByClassName(element, className) {
    try {
        while (element && element) {
            var classes = element.getAttribute('class');
            if (classes && classes.indexOf(className) > -1) {
                return element;
            }
            element = element.parentElement;
        }
    }
    catch (e) {
        throw new Error(e);
    }
    return null;
}
exports.findParentByClassName = findParentByClassName;
function triggerEvent(trigger) {
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
exports.triggerEvent = triggerEvent;
/**
 * Get the element position by placement and DOMRect
 * @param placement top | right | bottom | left
 * @param domRect Dom rect info, normally get it from getBoundingClientRect function
 */
function getPositionByPlacement(placement, domRect) {
    var x = domRect.x; // Initial placement is top
    var y = domRect.y;
    if (placement === 'top') {
        y = domRect.y - domRect.height;
    }
    else if (placement === 'right') {
        x = domRect.x + domRect.width;
    }
    else if (placement === 'bottom') {
        y = domRect.y + domRect.height;
    }
    else if (placement === 'left') {
        x = domRect.x - domRect.width;
    }
    console.log('getPositionByPlacement', x, y);
    return { x: x, y: y };
}
exports.getPositionByPlacement = getPositionByPlacement;
function getAttr(domElement, attr) {
    return domElement.getAttribute(attr) || '';
}
exports.getAttr = getAttr;
//# sourceMappingURL=dom.js.map