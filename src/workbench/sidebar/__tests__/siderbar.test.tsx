import React from 'react';
import renderer from 'react-test-renderer';

import { Sidebar, Content, Header } from '../sidebar';

const testPane = {
    id: 'test',
    title: 'test',
    render() {
        return <div data-testid="test">here is content</div>;
    },
};

const anotherPane = {
    id: 'another',
    title: 'another',
    render() {
        return <div data-testid="another">here is another content</div>;
    },
};

describe('The SideBar Component', () => {
    test('Match Snapshot', () => {
        const component = renderer.create(
            <Sidebar panes={[testPane, anotherPane]} current="test" />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe('The Header Component', () => {
    test('Match Snapshot', () => {
        const component = renderer.create(
            <Header title={testPane.title} toolbar={[]} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe('The Content Component', () => {
    test('Match Snapshot', () => {
        const component = renderer.create(<Content>test</Content>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
