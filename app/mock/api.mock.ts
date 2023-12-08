import * as fs from 'fs';
import * as path from 'path';
import { defineMock } from 'vite-plugin-mock-dev-server';

function getAllFoldersAndFile() {
    const root = path.join(__dirname, '..', '..');
    const dirs = fs.readdirSync(root);
    const folders: string[] = [];
    const files: string[] = [];
    dirs.forEach((dir) => {
        const filePath = path.join(root, dir);
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

function getFileContent(fileName: string) {
    const root = path.join(__dirname, '..', '..');
    const filePath = path.join(root, fileName);
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
}

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
]);
