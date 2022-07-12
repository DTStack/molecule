import * as ReactDOM from 'react-dom';
import { createRoot, Root } from 'react-dom/client';

const reactdom: typeof ReactDOM & {
    createRoot?: typeof createRoot;
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
        usingClientEntryPoint?: boolean;
    };
} = {
    ...ReactDOM,
};

let nextReactDOMClient: typeof createRoot | undefined;

export const renderedSign = Symbol('__molecule__root');

if (ReactDOM.version.startsWith('18')) {
    nextReactDOMClient = reactdom.createRoot;
}

function toggleWarning(skip: boolean) {
    const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = reactdom;

    if (
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
        typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
    ) {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
            skip;
    }
}

export const render = (
    node: JSX.Element,
    container: HTMLElement & {
        [renderedSign]?: Root;
    }
) => {
    if (nextReactDOMClient) {
        toggleWarning(true);
        const root = container[renderedSign] || nextReactDOMClient(container);
        toggleWarning(false);
        root.render(node);

        container[renderedSign] = root;
        return;
    }

    reactdom.render(node, container);
};

export const unmout = (
    container: HTMLElement & {
        [renderedSign]?: Root;
    }
) => {
    if (nextReactDOMClient) {
        container[renderedSign]?.unmount();
        Reflect.deleteProperty(container, renderedSign);
        return true;
    }

    return reactdom.unmountComponentAtNode(container);
};
