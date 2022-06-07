---
title: Extension
sidebar_label: Extension
---

[Extension][ext-url] as one of the most important **core** modules of Molecule, it provides a mechanism for extending the IDE Workbench. Through this mechanism, you can easily implement customization and manage these extended applications.

## IExtension

[Extension][ext-url] is an interface that contains **attributes** and **methods** such as `id`, `name`, `activate`, `dispose`, etc. This **interface** can help developers create extensions faster.

Molecule supports you to use **literal** or **class** to define extension objects, depending on your preference.

### Literal object

```ts
import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';
import { IExtensionService } from '@dtinsight/molecule/esm/services';

export const ExampleExt: IExtension = {
    id: 'ExampleExt',
    name: 'Example Extension',
    contributes: {},
    activate(extensionCtx: IExtensionService) {},
    dispose(extensionCtx: IExtensionService) {},
};
```

### Class object

```ts
import molecule from '@dtinsight/molecule';
import { IExtension } from '@dtinsight/molecule/esm/model/extension';
import { IExtensionService } from '@dtinsight/molecule/esm/services';

export class ExampleExt implements IExtension {
    id: string = 'ExampleExt';
    name: string = 'Example Extension';

    activate(extensionCtx: IExtensionService): void {
        // Do something
    }

    dispose(extensionCtx: IExtensionService): void {
        // Do something
    }
}
```

## ExtensionService

In Molecule, you can manage the **addition, query, deletion** and other operations of extensions through the [ExtensionService][service-url] service object. Examples are as follows:

```ts
// Add Extension, but no activated
molecule.extension.add(extensions);
// Dispose the Extension
molecule.extension.dispose(extensionId);
// Get an Extension
molecule.extension.getExtension(extensionId);
```

## Disable extension

In some cases, you may want to **disable** some built-in extensions in Molecule. Here you can use the [`inactive`][inactive-url] method in [ExtensionService][service-url], for example:

```ts
import React from 'react';
import molecule, { create, Workbench } from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';

// All Extension instances
import extensions from './extensions';

const moInstance = create({
    extensions,
});

moInstance.onBeforeLoad(() => {
    molecule.extension.inactive((ext) => {
        // Inactive the Extension which id is ExampleExt
        return extension.id === 'ExampleExt';
    });
});

const App = () => moInstance.render(<Workbench />);

export default App;
```

:::caution
It should be noted that the [inactive][inactive-url] method needs to be declared after [create](../api#create).
:::

[inactive-url]: ../api/interfaces/molecule.IExtensionService#inactive
[service-url]: ../api/classes/molecule.ExtensionService
[cmd-url]: ../api/classes/molecule.ExtensionService#executecommand
[ext-url]: ../api/interfaces/molecule.model.IExtension
