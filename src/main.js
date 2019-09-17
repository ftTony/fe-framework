import program from 'commander';
import { VERSION } from './utils/constants';
import apply from './index';
import chalk from 'chalk';

let actionMap = {
    init: {
        description: '生成一个新项目模板',
        usages: [
            '给新项目模板起一个名字'
        ]
    },
    config: {

    }
}

Object.keys(actionMap).forEach((action) => {

});

function help () {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {

    })
}

program.usage('');
program.usage('-h', help);
program.usage('--help', help);
program.version(VERSION, '-V --version').parse(process.argv);

// 不带参数时

if (!process.argv.slice(2).length) {

}
function make_green (txt) {
    return chalk.green(txt);
}

