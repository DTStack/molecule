import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { PanelView } from '../index';
import { Panel } from '../panel';
import {
    builtInOutputPanel,
    builtInPanelToolbox,
    IPanel,
    PanelModel,
} from 'mo/model/workbench/panel';
import { builtInPanelProblems } from 'mo/model/problems';

function panelMockModel(): PanelModel {
    const output = builtInOutputPanel();
    const problems = builtInPanelProblems();
    const toolboxResize = builtInPanelToolbox();
    return new PanelModel(output, [output, problems], toolboxResize);
}

describe('Test Panel Component', () => {
    test('Match the PanelView snapshot', async () => {
        const component = renderer.create(<PanelView />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Test PanelView render', async () => {
        const { queryAllByText } = render(<PanelView />);
        expect(queryAllByText(builtInOutputPanel().name!)).not.toBeNull();
        expect(queryAllByText(builtInPanelProblems().name!)).not.toBeNull();
    });

    test('Match the Panel snapshot', async () => {
        const component = renderer.create(<Panel {...panelMockModel()} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Customize the Panel toolbox', async () => {
        const panel: IPanel = new PanelModel();
        const output = builtInOutputPanel();
        panel.toolbox = builtInPanelToolbox();
        panel.current = output;
        const { queryByText, container, rerender } = render(
            <Panel {...panel} />
        );
        expect(queryByText('box1')).not.toBeInTheDocument();

        output.toolbox = [{ id: 'box1', name: 'box1' }];
        rerender(<Panel {...panel} />);
        expect(container.querySelector('#box1')).toBeInTheDocument();

        document.body.innerHTML = '';
        panel.toolbox = undefined;
        rerender(<Panel {...panel} />);
        expect(container.querySelector('#box1')).not.toBeInTheDocument();
    });

    test('Customize the Panel render content', async () => {
        const panel = panelMockModel();
        const { container, rerender, getAllByText } = render(
            <Panel {...panel} />
        );
        expect(
            container.querySelector('.mo-monaco-editor')
        ).toBeInTheDocument();

        panel.current!.renderPane = () => <span>customizedPane</span>;
        rerender(<Panel {...panel} />);
        expect(
            container.querySelector('.mo-monaco-editor')
        ).not.toBeInTheDocument();
        expect(getAllByText('customizedPane')).not.toBeNull();
    });

    test('Sort the Panel ', async () => {
        const current = { id: '1', name: 'test1' };
        const panel2 = { id: '2', name: 'test2' };

        const panel = new PanelModel(current, [current, panel2]);

        const { container, rerender } = render(<Panel {...panel} />);
        const tabs = container.querySelectorAll<HTMLDivElement>(
            '.mo-tab__item'
        );
        expect(tabs![0].textContent).toEqual('test1');
        expect(tabs![1].textContent).toEqual('test2');

        panel.data[0].sortIndex = 2;
        panel.data[1].sortIndex = 1;

        rerender(<Panel {...panel} />);
        const tabs1 = container.querySelectorAll<HTMLDivElement>(
            '.mo-tab__item'
        );
        expect(tabs1![0].textContent).toEqual('test2');
    });
});
