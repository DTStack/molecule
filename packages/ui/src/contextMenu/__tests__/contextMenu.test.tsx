import React from 'react';
import { render } from '@testing-library/react';

import { IContextMenu, useContextMenu } from '../index';

describe('Test ContextMenu Component', () => {
    const container = render(<div data-testid="anchor"></div>);
    const anchorEle = container.getByTestId('anchor');
    let contextMenu: IContextMenu | undefined;

    test('Test the useContextMenu anchor is null', () => {
        contextMenu = useContextMenu({
            anchor: null,
            render: () => <></>,
        });
        expect(contextMenu).toBeUndefined();
    });

    test('Test the useContextMenu method', () => {
        contextMenu = useContextMenu({
            anchor: anchorEle,
            render() {
                return <span data-testid="menuitem">Test context menu</span>;
            },
        });
        expect(contextMenu).not.toBeUndefined();
    });

    test('Test the useContextMenu show method', () => {
        contextMenu?.show({
            x: anchorEle.offsetTop,
            y: anchorEle.offsetLeft,
        });
        const content = container.getByTestId('menuitem');
        expect(content).not.toBeUndefined();
        expect(contextMenu?.view?.style.visibility).toEqual('visible');
    });

    test('Test the useContextMenu hide method', () => {
        contextMenu?.hide();
        expect(contextMenu?.view?.style.visibility).toEqual('hidden');
    });
});
