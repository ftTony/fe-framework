'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULTS = exports.RC = exports.VERSION = undefined;

var _package = require('../../package.json');

// 当前package.json 的版本号
const VERSION = exports.VERSION = _package.version;

// 用户的根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件目录
const RC = exports.RC = `${HOME}/.xwz`;

const DEFAULTS = exports.DEFAULTS = {
    registry: '',
    trype: 'users'
};