import * as React from 'react';
import Toolbar from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { colorThemeService, explorerService } from 'mo';
import { Select, Option } from 'mo/components/select';
import { IColorTheme } from 'mo/model/colorTheme';
import SearchTree from './searchTree';

interface ISearchPaneToolBar {}

const initialState = {
    input: '',
    toolbar: [
        {
            id: 'Refresh',
            title: 'Refresh',
            disabled: true,
            iconName: 'codicon-refresh',
        },
        {
            id: 'Clear',
            disabled: true,
            title: 'Clear all',
            iconName: 'codicon-clear-all',
        },
        {
            id: 'Collapse',
            title: 'Collapse all',
            disabled: true,
            iconName: 'codicon-collapse-all',
        },
    ],
};
const explorerState = explorerService.getState();

type State = typeof initialState;

export default class SearchPane extends React.Component<
    ISearchPaneToolBar,
    State
> {
    state: State;

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    onInput = (e) => {
        const nextToolBar = [...this.state.toolbar];

        const value = e.target.value;
        if (!value) {
            nextToolBar.forEach((item) => {
                item.disabled = true;
            });
        } else {
            nextToolBar.forEach((item) => {
                item.disabled = false;
            });
        }
        this.setState({
            input: value,
            toolbar: nextToolBar,
        });
    };

    onChangeTheme = (e, option) => {
        if (option && option.value) {
            console.log('onChangeTheme:', option.value);
            colorThemeService.applyTheme(option.value);
        }
    };

    renderColorThemes() {
        const colorThemes = colorThemeService.getThemes();
        const defaultTheme = colorThemeService.colorTheme;
        const options = colorThemes.map((theme: IColorTheme) => {
            return (
                <Option key={theme.id} value={theme.id}>
                    {theme.label}
                </Option>
            );
        });
        return (
            <Select
                defaultValue={defaultTheme.id}
                onSelect={this.onChangeTheme}
            >
                {options}
            </Select>
        );
    }

    render() {
        const { toolbar } = this.state;
        const { input } = this.state;
        return (
            <div className={prefixClaName('search-pane', 'sidebar')}>
                <Header
                    title={'Search'}
                    toolbar={<Toolbar data={toolbar} onClick={this.onClick} />}
                />
                <Content>
                    <h1>Search Pane</h1>
                    <p>{input}</p>
                    <input onInput={this.onInput} />
                    {input && (
                        <SearchTree
                            data={explorerState?.folderTree?.data}
                            searchValue={input}
                        />
                    )}
                </Content>
            </div>
        );
    }
}
