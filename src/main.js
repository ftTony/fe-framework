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
        alias: 'cfg',
        description: 'config .xwz',
        usages: [
            'xwz config set <k> <v></v>',
            'xwz config get <k>',
            'xwz config remove <k>'
        ]
    }
}

Object.keys(actionMap).forEach((action) => {
    program.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
        switch (action) {
            case 'config':
                apply(action, ...program.argv.slice(3));
                break;
            case 'init':
                apply(action, ...program.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help () {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log(' - ' + usage);
        });
    });
    console.log('\r');
}

program.usage('<command> [options]');
program.usage('-h', help);
program.usage('--help', help);
program.version(VERSION, '-V --version').parse(process.argv);

// 不带参数时

if (!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}
function make_green (txt) {
    return chalk.green(txt);
}

