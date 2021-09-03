import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from 'mo/components/tooltip';

describe('Test Tooltip Component', () => {
    beforeEach(() => {
        const div = document.createElement('div');
        div.id = 'overlay';
        document.body.append(div);
    });

    afterEach(() => {
        document.getElementById('overlay')?.remove();
    });

    it('Should render overlay when mouseover the content', async () => {
        const component = render(
            <Tooltip
                getTooltipContainer={() => document.getElementById('overlay')!}
                overlay={<div data-testid="overlay">123</div>}
            >
                <span data-testid="content">test</span>
            </Tooltip>
        );
        const content = component.getByTestId('content');

        fireEvent.mouseOver(content);
        await waitFor(async () => {
            expect(await component.findByTestId('overlay')).toBeInTheDocument();
        });
    });

    it('Should not render overlay', async () => {
        const overlayContainer = document.getElementById('overlay')!;
        const component = render(
            <Tooltip
                getTooltipContainer={() => overlayContainer}
                overlayClassName="overlay-test"
                overlay={null}
            >
                <span data-testid="content">test</span>
            </Tooltip>
        );
        const content = component.getByTestId('content');

        fireEvent.mouseOver(content);

        await waitFor(() => {
            expect(overlayContainer.hasChildNodes()).toBeFalsy();
            expect(
                component.container.querySelector('.overlay-test')
            ).not.toBeInTheDocument();
        });
    });

    it('Should render correct className for overlay', async () => {
        const overlayContainer = document.getElementById('overlay')!;
        const component = render(
            <Tooltip
                getTooltipContainer={() => overlayContainer}
                overlayClassName="overlay-test"
                overlay={<div data-testid="overlay">overlay</div>}
            >
                <span data-testid="content">test</span>
            </Tooltip>
        );
        const content = component.getByTestId('content');

        fireEvent.mouseOver(content);

        await waitFor(async () => {
            expect(
                overlayContainer.querySelector('.rc-tooltip')?.classList
            ).toContain('overlay-test');
            expect(await component.findByTestId('overlay')).toBeInTheDocument();
        });
    });

    it('Should render null without children and overlay', async () => {
        const overlayContainer = document.getElementById('overlay')!;
        const component = render(
            <Tooltip
                getTooltipContainer={() => overlayContainer}
                overlayClassName="overlay-test"
                overlay={null}
            >
                {undefined}
            </Tooltip>
        );
        expect(component.container.hasChildNodes()).toBeFalsy();
    });
});
