import { RC, DEFAULTS } from './constants';
import { decode, encode } from 'ini';
import { promisify } from 'util';
import chalk from 'chalk';
import fs from 'fs';

const exits = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// RC 是配置文件
// DEFAULTS 是默认的配置
export const get = async (key) => {
    const exit = await exits(RC);
    let opts;
    if (exit) {

    }
}