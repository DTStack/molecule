---
title: Custom Workbench
sidebar_label: Custom Workbench
---

Molecule's default **Workbench** UI is a clone of **VSCode**. However, it often can't meet our needs in actual development scenarios.

In addition to some built-in atomic [Components](../api/namespaces/molecule.component), Molecule also provides basic **Workbench, SideBar, Editor, ActivityBar, MenuBar, Panel, StatusBar** and other core [**UI components**](../guides/extend-workbench), so that developers can **reassemble** their own **Workbench** according to their needs.

:::tip
All code demos in this part are based on the [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) project in [Quick Start](../quick-start).
:::

## Custom Workbench Example

![Custom Workbench](/img/advanced/custom-workbench.png)

Molecule's Workbench has a **VSCode layout** by default. In the example above, we placed the **MenuBar** horizontally **at the top** position, and on the right side of the editor, we have customized a **RightSideBar**.

:::info
At present, the top fixed layout for the **MenuBar** is integrated in Molecule. Besides, we will also integrate the **right sidebar (RightSideBar)** for Molecule in the future.
:::

### Restructuring Workbench

First, open the [source code](https://github.com/DTStack/molecule) of Molecule, and find the `src/workbench` directory, then copy the `workbench.tsx` file to the `views` or other directories of your project, and rename it to `myWorkbench.tsx`:

```tsx
<div id={ID_APP} className={appClassName} tabIndex={0}>
    <div className={workbenchFinalClassName}>
        <Display visible={isMenuBarHorizontal}>
            <MenuBarView mode={MenuBarMode.horizontal} />
        </Display>
        <div className={mainBenchClassName}>
            <div className={compositeBarClassName}>
                <Display visible={isMenuBarVertical}>
                    <MenuBarView mode={MenuBarMode.vertical} />
                </Display>
                <Display
                    visible={!activityBar.hidden}
                    className={displayActivityBarClassName}
                >
                    <ActivityBarView />
                </Display>
            </div>
            <SplitPane
                sizes={sidebar.hidden ? [0, '100%'] : splitPanePos}
                split="vertical"
                allowResize={[false]}
                onChange={handleSideBarChanged}
                onResizeStrategy={() => ['keep', 'pave']}
            >
                <Pane minSize={170} maxSize="80%">
                    <SidebarView />
                </Pane>
                <SplitPane
                    sizes={getSizes()}
                    allowResize={[false]}
                    split="horizontal"
                    onChange={handleEditorChanged}
                    onResizeStrategy={() => ['pave', 'keep']}
                >
                    <Pane minSize="10%" maxSize="80%">
                        <EditorView />
                    </Pane>
                    <PanelView />
                </SplitPane>
            </SplitPane>
        </div>
    </div>
    <Display visible={!statusBar.hidden}>
        <StatusBarView />
    </Display>
</div>
```

In the code, the `MenuBarView` in `horizontal` mode and `vertical` mode are placed in different positions. The `SplitPane` component includes `SidebarView` by default, as well as the **Editor** and **Panel** on the right, but does not include the **RightSideBar**.

The specific transformation is as follows:

```tsx title="/src/views/myWorkbench.tsx"
<div
    id={ID_APP}
    className={classNames(appClassName, 'myMolecule')}
    tabIndex={0}
>
    <div className={workbenchFinalClassName}>
        <Display visible={isMenuBarHorizontal}>
            <MenuBarView mode={MenuBarMode.horizontal} />
        </Display>
        <div className={mainBenchClassName}>
            <div className={compositeBarClassName}>
                <Display visible={isMenuBarVertical}>
                    <MenuBarView mode={MenuBarMode.vertical} />
                </Display>
                <Display
                    visible={!activityBar.hidden}
                    className={displayActivityBarClassName}
                >
                    <ActivityBarView />
                </Display>
            </div>
            <SplitPane
                sizes={sidebar.hidden ? [0, '100%'] : splitPanePos}
                split="vertical"
                allowResize={[false, true]}
                onChange={handleSideBarChanged}
                onResizeStrategy={() => ['keep', 'pave']}
            >
                <Pane minSize={170} maxSize="80%">
                    <SidebarView />
                </Pane>
                <SplitPane
                    sizes={getSizes()}
                    allowResize={[false, true]}
                    split="horizontal"
                    onChange={handleEditorChanged}
                    onResizeStrategy={() => ['pave', 'keep']}
                >
                    <Pane minSize="10%" maxSize="80%">
                        <EditorView />
                    </Pane>
                    <PanelView />
                </SplitPane>
            </SplitPane>
            <div style={{ width: 300 }}>
                <Sidebar current={MySidePane.id} panes={[MySidePane]} />
            </div>
        </div>
    </div>
    <Display visible={!statusBar.hidden}>
        <StatusBarView />
    </Display>
</div>
```

:::caution
The above code is only part of the `myWorkbench.tsx` file, the complete code can refer to [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/views/myWorkbench.tsx).
:::

We added a `RightSidebar`, which uses a built-in `Sidebar` component, and a custom `MySidePane` component is used in this `Sidebar` component.

### Custom RightSideBar

We reuse the built-in [Sidebar](../api/namespaces/molecule#sidebar-1) component, we only need to pass in the component of type [ISidebarPane](../api/interfaces/molecule.model.ISidebarPane):

```tsx title="/src/views/mySidePane.tsx"
import React from 'react';
import molecule from '@dtinsight/molecule';
import { Header, Content } from '@dtinsight/molecule/esm/workbench/sidebar';
import { IActionBarItemProps } from '@dtinsight/molecule/esm/components';
import { localize } from '@dtinsight/molecule/esm/i18n/localize';
import { ISidebarPane } from '@dtinsight/molecule/esm/model';

const Toolbar = molecule.component.Toolbar;

export function MySidePaneView() {
    const renderHeaderToolbar = React.useCallback((): IActionBarItemProps[] => {
        return [
            {
                icon: 'editor-layout',
                id: 'tools',
                title: 'Layout the right SidePane',
            },
        ];
    }, []);

    return (
        <div className={'mySidePane'}>
            <Header
                title={localize('demo.rightSidebar.title', 'Tools')}
                toolbar={<Toolbar data={renderHeaderToolbar()} />}
            />
            <Content>
                <p style={{ textAlign: 'center' }}>Right Side Pane</p>
            </Content>
        </div>
    );
}

export const MySidePane: ISidebarPane = {
    id: 'mySidePane',
    title: 'Tools',
    render: () => {
        return <MySidePaneView />;
    },
};
```

After completing these operations, you can see the layout shown above in the interface. For complete example, please refer to [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo)

## Summary

In the above example, a lot of Molecule's **built-in** UI components are used to implement customization. However, using built-in [components](../api/namespaces/molecule.component) has a certain start-up cost and requires developers to have a better understanding of the built-in UI components. We will continue to optimize the **documentation** and **API** in subsequent versions to reduce the cost of getting started and provide as many **examples** as possible.
