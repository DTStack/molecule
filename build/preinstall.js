let err = false;

const majorNodeVersion = parseInt(/^(\d+)\./.exec(process.versions.node)[1]);

if (majorNodeVersion < 10) {
    console.error('\033[1;31m*** Please use node >=10.\033[0;0m\n');
    err = true;
}

if (err) {
    process.exit(1);
}
