export const data = [
    {
        id: '1',
        title: 'folder',
        key: 'folder',
        type: 'folder',
        contextMenu: [
            {
                id: 'custom',
                name: 'Custom ContextMenu',
                onClick: () => { console.log("i'm custom contextMenu") }
            },
        ],
        children: [
            {
                id: '2',
                title: 'abccccccccc',
                key: 'abccccccccc',
                type: 'folder',
                children: [
                    {
                        id: '3',
                        title: 'test.txt',
                        key: 'test.txt',
                        type: 'file',
                        icon: 'symbol-file'
                    },
                    {
                        id: '4',
                        title: 'test.js',
                        key: 'test.js',
                        type: 'file',
                        icon: 'file-binary',
                    },
                    {
                        id: '5',
                        title: 'test.html',
                        key: 'test.html',
                        type: 'file',
                        icon: 'file-code',
                    },
                ],
            },
            {
                id: '6',
                title: 'xyz',
                key: 'xyz',
                type: 'folder',
                children: [
                    {
                        id: '7',
                        title: 'test.pdf',
                        key: 'test.pdf',
                        type: 'file',
                        icon: 'file-pdf',
                    },
                    {
                        id: '8',
                        title: 'test.media',
                        key: 'test.media',
                        type: 'file',
                        icon: 'file-media',
                    },
                    {
                        id: '9',
                        title: 'test.zip',
                        key: 'test.zip',
                        type: 'file',
                        icon: 'file-zip',
                    },
                ],
            },
            {
                id: '10',
                title: 'file.yaml',
                key: 'file.yaml',
                type: 'file',
            },
        ],
    },
];
