import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import { Breadcrumb } from '../index';
import type { IBreadcrumbItemProps } from '../index';
import { breadcrumbLabelClassName, defaultBreadcrumbClassName } from '../base';

const mockData: IBreadcrumbItemProps[] = new Array(3)
    .fill(1)
    .map((_, index) => ({
        id: index.toString(),
        name: `name${index}`,
    }));

describe('Test Breadcrumb Component', () => {
    test('Should render Breadcrumb multiply levels', () => {
        const component = renderer.create(<Breadcrumb routes={mockData} />);

        const breadcrumb = component.toJSON();
        expect(breadcrumb).toMatchSnapshot();
    });

    test('Should have multiply classNames', () => {
        const wrapper = render(
            <Breadcrumb routes={mockData} className="test" />
        );

        const container = wrapper.container.querySelector(
            `.${defaultBreadcrumbClassName}`
        ) as HTMLDivElement;

        expect(container.classList).toContain('test');
    });

    test('Should render correct hrefs in Breadcrumb', () => {
        const data = mockData.map((item, index) => ({
            ...item,
            className: 'test',
            href: `https://www.dtstack.com/#${index}`,
        }));
        const wrapper = render(<Breadcrumb routes={data} />);
        const doms = wrapper.container.querySelectorAll('.test');
        const result = Array.prototype.every.call(
            doms,
            (child: HTMLAnchorElement, index) => {
                return child.href === `https://www.dtstack.com/#${index}`;
            }
        );

        expect(result).toBeTruthy();
    });

    test('Should render icons in front of name in Breadcrumb', () => {
        const data = mockData.map((item) => ({
            ...item,
            className: 'test',
            icon: 'account',
        }));

        const wrapper = render(<Breadcrumb routes={data} />);
        const doms = wrapper.container.querySelectorAll('.test');
        doms.forEach((dom) => {
            const iconDom = dom.firstChild as HTMLSpanElement;
            const nameDom = iconDom.nextSibling as HTMLSpanElement;
            expect(iconDom.classList).toContain('codicon-account');
            expect(nameDom.classList).toContain(breadcrumbLabelClassName);
        });
    });

    test('Should support to custom-render', () => {
        const data = mockData.map((item) => ({
            ...item,
            className: 'test',
        }));
        data[0].render = () => <div id="customDiv">custom render div</div>;

        const wrapper = render(<Breadcrumb routes={data} />);
        const doms = wrapper.container.querySelectorAll('.test');
        const customDom = doms[0].querySelector('#customDiv');
        expect(customDom).not.toBeUndefined();
    });

    test('Should support modify separator & correct count of separators', () => {
        const wrapper = render(
            <Breadcrumb
                routes={mockData}
                separator={<span className="separator">!</span>}
            />
        );
        const separators = wrapper.container.querySelectorAll('.separator');

        const result = Array.prototype.every.call(
            separators,
            (child: HTMLSpanElement, index) => {
                return child.firstChild?.nodeValue === '!';
            }
        );

        expect(separators.length).toBe(2);
        expect(result).toBeTruthy();
    });

    test('Should trigger onClick', () => {
        const data = mockData.map((item) => ({
            ...item,
            className: 'test',
        }));

        const mockFn = jest.fn();
        const wrapper = render(<Breadcrumb routes={data} onClick={mockFn} />);
        const doms = wrapper.container.querySelectorAll('.test');
        doms.forEach((dom) => {
            fireEvent.click(dom);
        });
        expect(mockFn).toBeCalledTimes(data.length);
    });

    test('Should pass through the property of HTMLDivElement correctly', () => {
        const wrapper = render(
            <Breadcrumb routes={mockData} title="test" data-jest="test" />
        );
        const container = wrapper.container.querySelector(
            `.${defaultBreadcrumbClassName}`
        ) as HTMLDivElement;

        expect(container?.title).toBe('test');
        expect(container?.dataset.jest).toBe('test');
    });
});
