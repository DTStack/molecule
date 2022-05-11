import 'reflect-metadata';
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { PanelView } from '../index';
import { Panel } from '../panel';
import { IPanel, PanelModel } from 'mo/model/workbench/panel';
import { select } from 'mo/common/dom';
import { modules } from 'mo/services/builtinService/const';
import { cloneDeep } from 'lodash';
import Output from '../output';
import { container } from 'tsyringe';
import { ExtendsLocales } from 'mo/extensions/locales-defaults';
import { LocaleService } from 'mo/i18n';

function panelMockModel(): PanelModel {
    const output = modules.builtInOutputPanel();
    output.renderPane = (item) => (
        <Output
            onUpdateEditorIns={(instance) => {
                // Please notice the problem about memory out
                // 'Cause we didn't dispose the older instance
                item.outputEditorInstance = instance;
            }}
            {...item}
        />
    );
    const problems = modules.builtInPanelProblems();
    const toolboxResize = [
        modules.builtInPanelToolboxResize(),
        modules.builtInPanelToolbox(),
    ];
    return new PanelModel(output, [output, problems], toolboxResize);
}

describe('Test Panel Component', () => {
    // initial locales
    const localeService = container.resolve(LocaleService);
    localeService.initialize(ExtendsLocales.contributes!.languages!, 'en');

    test('Match the PanelView snapshot', () => {
        const component = renderer.create(<PanelView />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Test PanelView render', () => {
        render(<PanelView />);
        expect(select<HTMLDivElement>('.mo-tab__item')).toBeNull();
    });

    test('Match the Panel snapshot', () => {
        const component = renderer.create(<Panel {...panelMockModel()} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Customize the Panel toolbox', () => {
        const panel: IPanel = new PanelModel();
        const output = cloneDeep(modules.builtInOutputPanel());
        output.renderPane = (item) => (
            <Output
                onUpdateEditorIns={(instance) => {
                    // Please notice the problem about memory out
                    // 'Cause we didn't dispose the older instance
                    item.outputEditorInstance = instance;
                }}
                {...item}
            />
        );
        panel.toolbox = [
            modules.builtInPanelToolboxResize(),
            modules.builtInPanelToolbox(),
        ];
        panel.current = output;
        const { queryByText, rerender, queryByTestId } = render(
            <Panel {...panel} />
        );
        expect(queryByText('box1')).not.toBeInTheDocument();

        output.toolbox = [{ id: 'box1', name: 'box1', 'data-testid': 'box1' }];
        rerender(<Panel {...panel} />);
        expect(queryByTestId('box1')).toBeInTheDocument();

        document.body.innerHTML = '';
        panel.toolbox = undefined;
        rerender(<Panel {...panel} />);
        expect(queryByTestId('box1')).not.toBeInTheDocument();
    });

    test('Customize the Panel render content', () => {
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
        expect(getAllByText('customizedPane').length).toBe(1);
    });

    test('Sort the Panel ', () => {
        const current = { id: '1', name: 'test1' };
        const panel2 = { id: '2', name: 'test2' };

        const panel = new PanelModel(current, [current, panel2]);

        const { container, rerender } = render(<Panel {...panel} />);
        const tabs =
            container.querySelectorAll<HTMLDivElement>('.mo-tab__item');
        expect(tabs![0].textContent).toEqual('test1');
        expect(tabs![1].textContent).toEqual('test2');

        panel.data[0].sortIndex = 2;
        panel.data[1].sortIndex = 1;

        rerender(<Panel {...panel} />);
        const tabs1 = container.querySelector<HTMLDivElement>('.mo-tab__item');
        expect(tabs1!.textContent).toEqual('test2');
    });
});
