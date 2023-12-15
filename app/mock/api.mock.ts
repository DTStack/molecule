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
