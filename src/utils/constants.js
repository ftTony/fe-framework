import {
  version
} from '../../package.json';

// 当前package.json 的版本号
export const VERSION = version;

// 用户的根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

// 配置文件目录
export const RC = `${HOME}/.xwz`;

export const DEFAULTS = {
  registry: 'fttony',
  trype: 'users'
}
