import { findParentByClassName, getPositionByPlacement } from '../dom';

describe('Test functions in dom.ts', () => {
    test('The getPositionByPlacement function', () => {
        const domRect = {
            x: 10,
            y: 10,
            width: 10,
            height: 10,
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
        } as DOMRect;
        let position;

        position = getPositionByPlacement('top', domRect);
        expect(typeof position.x).toBe('number');
        expect(typeof position.y).toBe('number');

        position = getPositionByPlacement('right', domRect);
        expect(typeof position.x).toBe('number');
        expect(typeof position.y).toBe('number');

        position = getPositionByPlacement('bottom', domRect);
        expect(typeof position.x).toBe('number');
        expect(typeof position.y).toBe('number');

        position = getPositionByPlacement('left', domRect);
        expect(typeof position.x).toBe('number');
        expect(typeof position.y).toBe('number');

        position = getPositionByPlacement('rightBottom', domRect);
        expect(typeof position.x).toBe('number');
        expect(typeof position.y).toBe('number');
    });

    test('The findParentByClassName function', () => {
        const ele = document.createElement('div');
        ele.setAttribute('class', 'test');
        document.body.appendChild(ele);
        const res = findParentByClassName(document.body, 'test');

        expect(res).not.toBeUndefined();

        expect(() => {
            findParentByClassName(1, 'test');
        }).toThrowError();
    });
});
