import { TreeNodeModel } from '@dtinsight/molecule/esm/utils/tree';

export function getWorkspace(): Promise<TreeNodeModel<any>> {
    return fetch('/api/getWorkspace')
        .then((res) => res.json())
        .then(({ data: { folders, files } }: { data: { folders: string[]; files: string[] } }) => {
            return new TreeNodeModel<void>('molecule', 'molecule', 'RootFolder', [
                ...folders.map((folder) => new TreeNodeModel<void>(`/${folder}`, folder, 'Folder')),
                ...files.map((file) => new TreeNodeModel<void>(`/${file}`, file, 'File')),
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
                    (folder) => new TreeNodeModel<void>(`${path}/${folder}`, folder, 'Folder')
                ),
                files.map((file) => new TreeNodeModel<void>(`${path}/${file}`, file, 'File')),
            ];
        });
}

export function searchFileContents(value: string) {
    return fetch(`/api/search`, { method: 'post', body: JSON.stringify({ value }) })
        .then((res) => res.json())
        .then(({ data }: { data: { context: string; fileName: string }[] }) => data);
}
