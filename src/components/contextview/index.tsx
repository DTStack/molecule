import './style.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { prefixClaName, classNames, getBEMElement, getBEMModifier } from 'mo/common/className';
import {
    getRelativePosition,
    select,
    HTMLElementType,
    IPosition,
} from 'mo/common/dom';
import { Utils } from 'dt-utils/lib';
import { EventEmitter } from 'mo/common/event';

export interface IContextViewProps {
    /**
     * Default true
     */
    shadowOutline?: boolean;
    render?: () => React.ReactNode;
}

export interface IContextView {
    view: HTMLElementType;
    show(anchorPos: IPosition, render?: () => React.ReactNode): void;
    hide(): void;
    onHide(callback?: Function): void;
    dispose(): void;
}

enum ContextViewEvent {
    onHide = 'onHide',
}

const contextViewClass = prefixClaName('context-view');
const contentClassName = getBEMElement(contextViewClass, 'content');
const blockClassName = getBEMElement(contextViewClass, 'block');
const shadowClassName = getBEMModifier(contextViewClass, 'shadow');

const Emitter = new EventEmitter();

export function useContextView(props?: IContextViewProps): IContextView {
    const claName = classNames(contextViewClass, 'fade-in');
    let contextView: HTMLElementType = select('.' + contextViewClass); // Singleton contextView dom

    const show = (anchorPos: IPosition, render?: () => React.ReactNode) => {
        const content = select('.' + contentClassName);
        const renderContent = render || props?.render;
        if (!renderContent)
            throw Error(
                'ContextView show Error: the render parameter not allowed be null!'
            );
        ReactDOM.render(<>{renderContent()}</>, content, () => {
            // Notice: if want to get the computed offsetHeight of contextView,
            // must display contextView ahead.
            contextView!.style.display = 'visible';
            const position = getRelativePosition(contextView!, anchorPos);
            contextView!.style.cssText = `
                top: ${position.y}px;
                left: ${position.x}px;
            `;
        });
    };

    const hide = () => {
        if (contextView) {
            contextView.style.visibility = 'hidden';
            ReactDOM.unmountComponentAtNode(select('.' + contentClassName)!);
            Emitter.emit(ContextViewEvent.onHide);
        }
    };

    const onHide = (callback: Function) => {
        Emitter.subscribe(ContextViewEvent.onHide, callback);
    };

    const onMaskClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        hide();
    };

    const dispose = () => {
        Emitter.unsubscribe(ContextViewEvent.onHide);
    };

    if (!contextView) {
        contextView = document.createElement('div');
        contextView.className = classNames(
            claName,
            Utils.isMacOs() ? 'mac' : null
        )!;
        contextView.style.visibility = 'hidden';
        const root = document.getElementById('molecule');
        if (!root) {
            document.body.appendChild(contextView);
        } else {
            root.appendChild(contextView);
        }
        const shadowClass = !props?.shadowOutline ? '' : shadowClassName;

        ReactDOM.render(
            <>
                <div
                    className={blockClassName}
                    onClick={onMaskClick}
                    onContextMenu={onMaskClick}
                ></div>
                <div
                    className={classNames(contentClassName, shadowClass)}
                ></div>
            </>,
            contextView
        );
    }

    return { view: contextView, show, hide, onHide, dispose };
}
