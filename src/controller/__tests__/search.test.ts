import { expectFnCalled } from '@test/utils';
import {
    ActivityBarService,
    SidebarService,
    SearchService,
    BuiltinService,
} from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { SearchController } from '../search/search';

const searchController = container.resolve(SearchController);
const activityBarService = container.resolve(ActivityBarService);
const sidebarService = container.resolve(SidebarService);
const searchService = container.resolve(SearchService);
const builtinService = container.resolve(BuiltinService);

describe('The search controller', () => {
    test('Should support to controll the default value', () => {
        // inactive all search panel
        builtinService.inactiveModule('builtInSearchActivityItem');
        searchController.initView();

        expect(activityBarService.getState().data).toHaveLength(0);
        builtinService.reset();

        // inactive the addons for searching pane
        builtinService.inactiveModule('builtInHeaderToolbar');
        builtinService.inactiveModule('builtInSearchAddons');
        builtinService.inactiveModule('builtInReplaceAddons');

        searchController.initView();
        expect(searchService.getState().headerToolBar).toHaveLength(0);
        expect(searchService.getState().searchAddons).toHaveLength(0);
        expect(searchService.getState().replaceAddons).toHaveLength(0);
        expect(activityBarService.getState().data).toHaveLength(1);
        expect(activityBarService.getState().data![0]).toEqual(
            expect.objectContaining(modules.builtInSearchActivityItem())
        );

        expect(sidebarService.getState().panes).toHaveLength(1);
        expect(sidebarService.getState().panes[0]).toEqual(
            expect.objectContaining({
                id: modules.builtInSearchActivityItem().id,
                title: 'SEARCH',
            })
        );

        sidebarService.reset();
        activityBarService.reset();
        builtinService.reset();
    });

    test('Should support to initView', () => {
        searchController.initView();
        const { headerToolBar, searchAddons, replaceAddons } =
            searchService.getState();

        expect(headerToolBar).toEqual(modules.builtInHeaderToolbar());
        expect(searchAddons).toEqual(modules.builtInSearchAddons());
        expect(replaceAddons).toEqual(modules.builtInReplaceAddons());
    });

    test('Should validate the value', () => {
        const mockFn = jest.fn();
        searchController.validateValue('test', mockFn);
        expect(mockFn).toBeCalled();
        mockFn.mockClear();

        // regex
        searchService.setState({
            isRegex: true,
        });
        searchController.validateValue('test', mockFn);
        expect(mockFn).toBeCalled();
        mockFn.mockClear();

        searchController.validateValue('\\', mockFn);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBeInstanceOf(Error);
    });

    test('Should get the index of searching result', () => {
        // match the value in regex and case sensitive
        searchService.setState({
            isRegex: true,
            isCaseSensitive: true,
            isWholeWords: false,
        });
        let index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(3);

        // match the value in regex and whole words
        searchService.setState({
            isRegex: true,
            isCaseSensitive: false,
            isWholeWords: true,
        });
        index = searchController.getSearchIndex('test', 't');
        expect(index).toBe(-1);

        // match the value in regex and use all conditions
        searchService.setState({
            isRegex: true,
            isCaseSensitive: true,
            isWholeWords: true,
        });
        index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(-1);

        // match the value in regex and not use all conditions
        searchService.setState({
            isRegex: true,
            isCaseSensitive: false,
            isWholeWords: false,
        });
        index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(0);

        // match the value in case sensitive
        searchService.setState({
            isRegex: false,
            isCaseSensitive: true,
            isWholeWords: false,
        });
        index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(3);

        // match the value in whole words
        searchService.setState({
            isRegex: false,
            isCaseSensitive: false,
            isWholeWords: true,
        });
        index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(-1);

        // match the value in all conditions
        searchService.setState({
            isRegex: false,
            isCaseSensitive: true,
            isWholeWords: true,
        });
        index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(-1);

        // match the value in not conditions
        searchService.setState({
            isRegex: false,
            isCaseSensitive: false,
            isWholeWords: false,
        });
        index = searchController.getSearchIndex('Test', 't');
        expect(index).toBe(0);
    });

    test('Should support to set validation informations', () => {
        searchController.setValidateInfo('test');

        expect(searchService.getState().validationInfo).toEqual({
            type: 'info',
            text: 'test',
        });
    });

    test('Should support to set the value of searching', () => {
        searchController.setSearchValue('test');
        expect(searchService.getState().value).toBe('test');
    });

    test('Should support to set the replace value', () => {
        searchController.setReplaceValue('ttt');
        expect(searchService.getState().replaceValue).toBe('ttt');
    });

    test('Should support to toggle the mode', () => {
        searchController.toggleMode(true);

        expect(searchService.getState().replaceMode).toBe(true);
    });

    test('Should execute the toggleAddon method', () => {
        // toggle the case sensitive status
        const mockAddon = {
            id: constants.SEARCH_CASE_SENSITIVE_COMMAND_ID,
        };
        searchController.toggleAddon(mockAddon);
        expect(searchService.getState().isCaseSensitive).toBeTruthy();

        // toggle the whole word status
        mockAddon.id = constants.SEARCH_WHOLE_WORD_COMMAND_ID;
        searchController.toggleAddon(mockAddon);
        expect(searchService.getState().isWholeWords).toBeTruthy();

        // toggle the regex status
        mockAddon.id = constants.SEARCH_REGULAR_EXPRESSION_COMMAND_ID;
        searchController.toggleAddon(mockAddon);
        expect(searchService.getState().isRegex).toBeTruthy();

        // toggle the regex status
        mockAddon.id = constants.SEARCH_PRESERVE_CASE_COMMAND_ID;
        searchController.toggleAddon(mockAddon);
        expect(searchService.getState().preserveCase).toBeTruthy();

        // replace all button
        const mockFn = jest.fn();
        searchService.onReplaceAll(mockFn);
        mockAddon.id = constants.SEARCH_REPLACE_ALL_COMMAND_ID;
        searchController.toggleAddon(mockAddon);
        expect(mockFn).toBeCalled();
    });

    test('Should emit the onChange event', () => {
        expectFnCalled((mockFn) => {
            searchService.onChange(mockFn);
            searchController.onChange('test', 'ttt');

            expect(mockFn.mock.calls[0][0]).toBe('test');
            expect(mockFn.mock.calls[0][1]).toBe('ttt');
        });
    });

    test('Should emit the onSearch event', () => {
        expectFnCalled((mockFn) => {
            searchService.onSearch(mockFn);
            searchController.onSearch('test', 'ttt');

            const { isRegex, isCaseSensitive, isWholeWords, preserveCase } =
                searchService.getState();
            expect(mockFn.mock.calls[0][0]).toBe('test');
            expect(mockFn.mock.calls[0][1]).toBe('ttt');
            expect(mockFn.mock.calls[0][2]).toEqual({
                isRegex,
                isCaseSensitive,
                isWholeWords,
                preserveCase,
            });
        });
    });

    test('Should emit the onResultClick event', () => {
        expectFnCalled((mockFn) => {
            searchService.onResultClick(mockFn);

            const mockItem = {
                id: 'test',
            };
            const mockResultData = [mockItem];
            searchController.onResultClick(mockItem, mockResultData);

            expect(mockFn.mock.calls[0][0]).toBe(mockItem);
            expect(mockFn.mock.calls[0][1]).toBe(mockResultData);
        });
    });
});
