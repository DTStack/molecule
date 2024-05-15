import * as fs from 'fs';
import * as path from 'path';
import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock([
    {
        url: '/api/getWorkspace',
        method: 'GET',
        body: {
            data: getAllFoldersAndFile(),
        },
    },
    {
        url: '/api/getFileContent/:id',
        method: 'GET',
        body(request) {
            const id = request.params.id as string;

            return { data: getFileContent(decodeURIComponent(id)) };
        },
    },
    {
        url: '/api/getFiles/:id',
        method: 'GET',
        body(request) {
            const id = request.params.id as string;

            return { data: getFiles(decodeURIComponent(id)) };
        },
    },
    {
        url: '/api/search',
        method: 'POST',
        async body(request) {
            const { value } = JSON.parse(request.body as any);
            const data = search(value);
            return { data };
        },
    },
]);

function getFolderAndFiles(p: string) {
    const dirs = fs.readdirSync(p);
    const folders: string[] = [];
    const files: string[] = [];
    dirs.forEach((dir) => {
        const filePath = path.join(p, dir);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            folders.push(dir);
        } else {
            files.push(dir);
        }
    });
    return {
        folders,
        files,
    };
}

function getAllFoldersAndFile() {
    const root = path.join(__dirname, '..', '..');
    return getFolderAndFiles(root);
}

function getFileContent(fileName: string) {
    const root = path.join(__dirname, '..', '..');
    const filePath = path.join(root, fileName.slice(1).replaceAll(/!/g, '/'));
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
}

function getFiles(p: string) {
    const root = path.join(__dirname, '..', '..');
    const dir = path.join(root, p.slice(1).replaceAll(/!/g, '/'));
    return getFolderAndFiles(dir);
}

function search(value: string) {
    const root = path.join(__dirname, '..', '..');
    const { folders, files } = getAllFoldersAndFile();
    const res: { filename: string; path: string; startline: number; data: string }[] = [];
    files.forEach((file) => {
        const content = fs.readFileSync(path.join(root, file), 'utf-8');
        const idx = content.indexOf(value);
        if (idx !== -1) {
            res.push({
                filename: file,
                path: file,
                startline: idx,
                data: content.slice(idx - 20, idx + value.length + 20),
            });
        }
    });

    folders.forEach((folder) => {
        const { files } = getFiles(`!${folder}`);
        files.forEach((file) => {
            const content = fs.readFileSync(path.join(root, folder, file), 'utf-8');
            const idx = content.indexOf(value);
            if (idx !== -1) {
                res.push({
                    filename: path.join(folder, file),
                    path: path.join(folder, file),
                    startline: idx,
                    data: content.slice(idx - 20, idx + value.length + 20),
                });
            }
        });
    });

    return res;
}
