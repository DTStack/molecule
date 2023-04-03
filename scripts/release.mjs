import fs from 'fs';
import path from 'path';
import { chalk, $, question, echo } from 'zx';

const errorLog = (str) => console.log(chalk.redBright(str));
const infoLog = (str) => console.log(chalk.whiteBright(str));

const succeeDoneLog = () => console.log(chalk.greenBright('✔ DONE!'));

const assert = (validation, str) => {
    if (!validation) {
        errorLog(str);
        process.exit(1);
    }
};
$.verbose = false;

const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = require(pkgPath);

(async () => {
    infoLog('1. Check the npm login.');
    const isLogin = (await $`npm whoami`).stdout.trim().includes('ENEEDAUTH');
    assert(
        !isLogin,
        'Please ensure your account is logining at https://registry.npmjs.org/'
    );
    succeeDoneLog();

    infoLog('2. Check the staged.');
    const isGitClean = (await $`git status --porcelain`).stdout.trim().length;
    assert(!isGitClean, 'You should empty the staged before release.');
    succeeDoneLog();

    infoLog('3. Check the branch.');
    const currentBranch = (
        await $`git rev-parse --abbrev-ref HEAD`
    ).stdout.trim();
    assert(currentBranch === 'main', `can't release on ${currentBranch}`);
    succeeDoneLog();

    infoLog('4. Check the remote up to date.');
    const gitStatus = (await $`git status --short --branch`).stdout.trim();
    assert(!gitStatus.includes('behind'), `git status is behind remote`);
    succeeDoneLog();

    // check npm registry
    infoLog('5. Check the npm registry.');
    const isNPMRegistry =
        pkg.publishConfig.registry === 'https://registry.npmjs.org/';
    assert(isNPMRegistry, 'npm registry is not https://registry.npmjs.org/');
    succeeDoneLog();

    infoLog('6. Bump version.');
    const lastVersion = require('../package.json').version;
    const nextVersion = await question(
        `Input the next version(current version is ${lastVersion}): `
    );

    infoLog(`7. Generate Changelog`);
    $.verbose = true;
    await $`npx standard-version --release-as ${nextVersion}`;
    $.verbose = false;
    succeeDoneLog();

    infoLog('8. Execute build...');
    await $`npm run build`;
    succeeDoneLog();

    infoLog(`9. Publish`);
    echo(await $`npm pack --dry-run`);
    const publishCheck = await question(
        'Are these files you want to publish? (Y/n)'
    );
    if (publishCheck.toLocaleLowerCase() === 'n') {
        await $`git tag -d v${nextVersion}`;
        await $`git reset`;
        await $`git reset HEAD^`;
        await $`git checkout -- .`;
        process.exit(1);
    }
    // use npm pack --dry-run to check publish pack
    await $`npm publish -otp=${await question('Input the OTP: ')}`;
    succeeDoneLog();

    infoLog(`10. git push`);
    $.verbose = true;
    await $`git push --follow-tags origin main`;
    $.verbose = false;
    succeeDoneLog();
})();
