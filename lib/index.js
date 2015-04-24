/*!
 * sop-ui
 * Copyright (c) 2015 Someoddpilot
 */

import path from 'path';

export const version = require(path.join(__dirname, '../package.json')).version;

export const path = __dirname;

function runPlugin(style) {
  style.include(__dirname);

  style.include(path.join(__dirname, '../node_modules/sop-styl/lib'));
  style.include(path.join(__dirname, '../node_modules/nib/lib'));
}

export default function plugin() {
  return runPlugin;
}
