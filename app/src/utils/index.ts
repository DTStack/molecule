import { tree } from '@dtinsight/molecule';

export function getWorkspace(): Promise<tree.TreeNodeModel<any>> {
    return fetch('/api/getWorkspace')
        .then((res) => res.json())
        .then(({ data: { folders, files } }: { data: { folders: string[]; files: string[] } }) => {
            return new tree.TreeNodeModel<void>('molecule', 'molecule', 'RootFolder', [
                ...folders.map(
                    (folder) => new tree.TreeNodeModel<void>(`/${folder}`, folder, 'Folder', undefined, 'folder')
                ),
                ...files.map((file) => new tree.TreeNodeModel<void>(`/${file}`, file, 'File')),
            ]);
        });
}

export function getFileContent(path: string): Promise<string> {
    return fetch(`/api/getFileContent/${encodeURIComponent(path.replaceAll(/\//g, '!'))}`)
        .then((res) => res.json())
        .then(({ data }: { data: string }) => {
            return data;
        });
}

export function getFiles(path: string) {
    return fetch(`/api/getFiles/${encodeURIComponent(path.replaceAll(/\//g, '!'))}`)
        .then((res) => res.json())
        .then(({ data: { folders, files } }: { data: { folders: string[]; files: string[] } }) => {
            return [
                folders.map(
                    (folder) => new tree.TreeNodeModel<void>(`${path}/${folder}`, folder, 'Folder', undefined, 'folder')
                ),
                files.map((file) => new tree.TreeNodeModel<void>(`${path}/${file}`, file, 'File')),
            ];
        });
}

export function searchFileContents(value: string) {
    return fetch(`/api/search`, { method: 'post', body: JSON.stringify({ value }) })
        .then((res) => res.json())
        .then(({ data }: { data: { filename: string; path: string; startline: number; data: string }[] }) => data);
}
