import { chalk, $, question } from 'zx';
import fs from 'fs';
import path from 'path';

const errorLog = (str) => console.log(chalk.redBright(str));
const infoLog = (str) => console.log(chalk.blackBright(str));
const successLog = (str) => console.log(chalk.greenBright(str));

const succeeDoneLog = () => console.log(chalk.greenBright('DONE!'));

const assert = (validation, str) => {
    if (!validation) {
        errorLog(str);
        process.exit(1);
    }
};
$.verbose = false;

(async () => {
    infoLog('1. Check the staged.');
    const isGitClean = (await $`git status --porcelain`).stdout.trim().length;
    assert(!isGitClean, 'You should empty the staged before release.');
    succeeDoneLog();

    infoLog('2. Check the branch.');
    const currentBranch = (
        await $`git rev-parse --abbrev-ref HEAD`
    ).stdout.trim();
    assert(currentBranch === 'main', `can't release on ${currentBranch}`);
    succeeDoneLog();

    infoLog('3. Check the remote up to date.');
    const gitStatus = (await $`git status --short --branch`).stdout.trim();
    assert(!gitStatus.includes('behind'), `git status is behind remote`);
    succeeDoneLog();

    // check npm registry
    infoLog('4. Check the npm registry.');
    const packagesDir = path.join(__dirname, '..', 'packages');
    const subPkgs = fs.readdirSync(packagesDir).filter((dir) => {
        return (
            !dir.startsWith('.') &&
            fs.existsSync(path.join(packagesDir, dir, 'package.json'))
        );
    });
    const isNPMRegistry = subPkgs.every((pkgDir) => {
        const pkg = require(path.join(packagesDir, pkgDir, 'package.json'));
        return pkg.publishConfig === 'https://registry.npmjs.org/';
    });
    assert(isNPMRegistry, 'npm registry is not https://registry.npmjs.org/');
    succeeDoneLog();

    infoLog('5. Execute build...');
    await $`npm run build`;
    succeeDoneLog();

    infoLog('6. Bump version.');
    const lastVersion = require('../package.json').version;
    const nextVersion = await question(
        `Input the next version(current version is ${lastVersion}): `
    );

    infoLog(`6. Bump the version of main repository to ${nextVersion}...`);
    const mainPkgPath = path.join(__dirname, '..', 'package.json');
    const pkg = require(mainPkgPath);
    pkg.version = nextVersion;
    fs.writeFileSync(mainPkgPath, JSON.stringify(pkg, null, 4));
    succeeDoneLog();

    infoLog(`7. Bump the version of packages repository to ${nextVersion}...`);
    subPkgs.forEach((pkgDir) => {
        const pkg = require(path.join(packagesDir, pkgDir, 'package.json'));
        pkg.version = nextVersion;
        fs.writeFileSync(
            path.join(packagesDir, pkgDir, 'package.json'),
            JSON.stringify(pkg, null, 4)
        );
    });
    succeeDoneLog();

    infoLog(
        `8. Bump the dependencies of packages repository to ${nextVersion}...`
    );
    subPkgs.forEach((pkgDir) => {
        const pkg = require(path.join(packagesDir, pkgDir, 'package.json'));
        Object.keys(pkg.dependencies).forEach((key) => {
            if (key.startsWith('@dtinsight/molecule-')) {
                pkg.dependencies[key] = nextVersion;
            }
        });
        fs.writeFileSync(
            path.join(packagesDir, pkgDir, 'package.json'),
            JSON.stringify(pkg, null, 4)
        );
    });
    succeeDoneLog();

    infoLog(`8. Update pnpm lockfile`);
    await $`pnpm i`;
    succeeDoneLog();

    infoLog(`9. Generate Changelog`);
    $.verbose = true;
    await $`npx standard-version --release-as ${nextVersion}`;
    $.verbose = false;
    succeeDoneLog();

    infoLog(`10. Publish`);
    // use npm pack --dry-run to check publish pack
    await Promise.all(
        subPkgs.map(async (pkg) => {
            await $`cd packages/${pkg} && npm publish`;
            successLog(`+ @dtinsight/molecule-${pkg}@${nextVersion}`);
        })
    );
    succeeDoneLog();

    infoLog(`11. git push`);
    $.verbose = true;
    await $`git push --follow-tags origin main`;
    $.verbose = false;
    succeeDoneLog();
})();
