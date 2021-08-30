import 'reflect-metadata';
import { container } from 'tsyringe';
import { ISearchService, SearchService } from '../searchService';
import { InfoTypeEnums } from 'mo/components/search/input';
import {
    SearchEvent,
    builtInSearchAddons,
    builtInReplaceAddons,
} from 'mo/model/workbench/search';

describe('Test StatusBarService', () => {
    const searchBarService = container.resolve<ISearchService>(SearchService);
    const TEST_ID = 'test-id';

    beforeEach(() => {
        searchBarService.setState({
            searchAddons: [],
            replaceAddons: [],
        });
    });

    test('SearchBarService Class instance', () => {
        expect(searchBarService).not.toBeUndefined();
        expect(searchBarService.getState()).not.toBeUndefined();
    });

    test('Should support to set setValidateInfo', () => {
        const TEST_DATA = {
            type: InfoTypeEnums.info,
            text: InfoTypeEnums.info,
        };

        searchBarService.setValidateInfo(TEST_DATA);
        expect(searchBarService.getState().validationInfo).toEqual(TEST_DATA);

        searchBarService.setValidateInfo(TEST_ID);
        expect(searchBarService.getState().validationInfo).toEqual({
            text: TEST_ID,
            type: 'info',
        });
    });

    test('Should support to set setValidateInfo', () => {
        const TEST_DATA = {
            type: InfoTypeEnums.info,
            text: InfoTypeEnums.info,
        };

        searchBarService.setValidateInfo(TEST_DATA);
        expect(searchBarService.getState().validationInfo).toEqual(TEST_DATA);

        searchBarService.setValidateInfo(TEST_ID);
        expect(searchBarService.getState().validationInfo).toEqual({
            text: TEST_ID,
            type: 'info',
        });
    });

    test('Should support to set setSearchValue', () => {
        searchBarService.setSearchValue(TEST_ID);
        expect(searchBarService.getState().value).toBe(TEST_ID);
    });

    test('Should support to set setReplaceValue', () => {
        searchBarService.setReplaceValue(TEST_ID);
        expect(searchBarService.getState().replaceValue).toBe(TEST_ID);
    });

    test('SetResult default value', () => {
        expect(searchBarService.getState().result).toEqual([]);
    });

    test('Should support to set setResult', () => {
        const mockData = [{ name: TEST_ID }];

        searchBarService.setResult(mockData);
        expect(searchBarService.getState().result).toEqual(mockData);
    });

    test('Should support to set toggleMode', () => {
        searchBarService.toggleMode(true);
        expect(searchBarService.getState().replaceMode).toBe(true);

        searchBarService.toggleMode(false);
        expect(searchBarService.getState().replaceMode).toBe(false);
    });

    test('Should support to toggle case sensitive', () => {
        const testValue = builtInSearchAddons();
        const TEST_RESULT = Object.assign({}, testValue[0], { checked: true });

        searchBarService.setState({
            isCaseSensitive: false,
        });
        expect(searchBarService.getState().isCaseSensitive).toBe(false);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons).toEqual([]);

        searchBarService.setState({
            searchAddons: testValue,
        });
        searchBarService.toggleCaseSensitive();

        expect(searchBarService.getState().isCaseSensitive).toBe(true);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons?.[0]).toEqual(
            TEST_RESULT
        );
    });

    test('Should support to toggle whole word', () => {
        const testValue = builtInSearchAddons();
        const TEST_RESULT = Object.assign({}, testValue[1], { checked: true });

        searchBarService.setState({
            isWholeWords: false,
        });
        expect(searchBarService.getState().isWholeWords).toBe(false);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons).toEqual([]);

        searchBarService.setState({
            searchAddons: testValue,
        });
        searchBarService.toggleWholeWord();

        expect(searchBarService.getState().isWholeWords).toBe(true);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons?.[1]).toEqual(
            TEST_RESULT
        );
    });

    test('Should support to toggle regex', () => {
        const testValue = builtInSearchAddons();
        const TEST_RESULT = Object.assign({}, testValue[2], { checked: true });

        searchBarService.setState({
            isRegex: false,
        });
        expect(searchBarService.getState().isRegex).toBe(false);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons).toEqual([]);

        searchBarService.setState({
            searchAddons: testValue,
        });
        searchBarService.toggleRegex();

        expect(searchBarService.getState().isRegex).toBe(true);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons?.[2]).toEqual(
            TEST_RESULT
        );
    });

    test('Should support to toggle preserve case', () => {
        const testValue = builtInReplaceAddons();
        const TEST_RESULT = Object.assign({}, testValue[0], { checked: true });

        searchBarService.setState({
            preserveCase: false,
        });
        expect(searchBarService.getState().preserveCase).toBe(false);
        expect(searchBarService.getState().replaceAddons).toEqual([]);
        expect(searchBarService.getState().searchAddons).toEqual([]);

        searchBarService.setState({
            replaceAddons: testValue,
        });
        searchBarService.togglePreserveCase();

        expect(searchBarService.getState().preserveCase).toBe(true);
        expect(searchBarService.getState().replaceAddons?.[0]).toEqual(
            TEST_RESULT
        );
        expect(searchBarService.getState().searchAddons).toEqual([]);
    });

    test('Should support to trigger replace all', () => {
        const TEST_FN = jest.fn();

        searchBarService.onReplaceAll(TEST_FN);
        searchBarService.emit(SearchEvent.onReplaceAll);
        expect(TEST_FN).toBeCalled();
    });

    test('Should support to trigger change', () => {
        let [TEST_PARAME1, TEST_PARAME2] = ['', ''];
        const [TEST_VALUE1, TEST_VALUE2] = ['foo', 'bar'];
        const TEST_FN = jest.fn((value, replaceValue) => {
            TEST_PARAME1 = value;
            TEST_PARAME2 = replaceValue;
        });

        searchBarService.onChange(TEST_FN);
        searchBarService.emit(SearchEvent.onChange, TEST_VALUE1, TEST_VALUE2);
        expect(TEST_FN).toBeCalled();
        expect(TEST_PARAME1).toBe(TEST_VALUE1);
        expect(TEST_PARAME2).toBe(TEST_VALUE2);
    });

    test('Should support to trigger search', () => {
        const TEST_FN = jest.fn();

        searchBarService.onSearch(TEST_FN);
        searchBarService.emit(SearchEvent.onSearch);
        expect(TEST_FN).toBeCalled();
    });

    test('Should support to result click', () => {
        const TEST_FN = jest.fn();

        searchBarService.onResultClick(TEST_FN);
        searchBarService.emit(SearchEvent.onResultClick);
        expect(TEST_FN).toBeCalled();
    });
});
