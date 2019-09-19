'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let actionMap = {
    init: {
        description: '生成一个新项目模板',
        usages: ['给新项目模板起一个名字']
    },
    config: {
        alias: 'cfg',
        description: 'config .xwz',
        usages: ['xwz config set <k> <v></v>', 'xwz config get <k>', 'xwz config remove <k>']
    }
};

Object.keys(actionMap).forEach(action => {
    _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
        switch (action) {
            case 'config':
                (0, _index2.default)(action, ..._commander2.default.argv.slice(3));
                break;
            case 'init':
                (0, _index2.default)(action, ..._commander2.default.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach(action => {
        actionMap[action].usages.forEach(usage => {
            console.log(' - ' + usage);
        });
    });
    console.log('\r');
}

_commander2.default.usage('<command> [options]');
_commander2.default.usage('-h', help);
_commander2.default.usage('--help', help);
_commander2.default.version(_constants.VERSION, '-V --version').parse(process.argv);

// 不带参数时

if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(make_green);
}
function make_green(txt) {
    return _chalk2.default.green(txt);
}