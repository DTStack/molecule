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
    const res: { context: string; fileName: string }[] = [];
    files.forEach((file) => {
        const content = fs.readFileSync(path.join(root, file), 'utf-8');
        const idx = content.indexOf(value);
        if (idx !== -1) {
            res.push({
                context: content.slice(idx - 10, idx + value.length + 10),
                fileName: `${file}`,
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
                    context: content.slice(idx - 10, idx + value.length + 10),
                    fileName: `${folder}/${file}`,
                });
            }
        });
    });

    return res;
}
