let err = false;

const majorNodeVersion = parseInt(/^(\d+)\./.exec(process.versions.node)[1]);

if (majorNodeVersion < 10 || majorNodeVersion > 14) {
    console.error('\033[1;31m*** Please use node >=10 and <=14.\033[0;0m');
    err = true;
}

const cp = require('child_process');

if (err) {
    console.error('');
    process.exit(1);
}
