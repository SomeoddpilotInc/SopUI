/*!
 * sop-ui
 * Copyright (c) 2015 Someoddpilot
 */

import path from 'path';

const version = require(path.join(__dirname, '../package.json')).version;

function runPlugin(style) {
  style.include(__dirname);

  style.include(path.join(__dirname, '../node_modules/sop-styl/lib'));
  style.include(path.join(__dirname, '../node_modules/nib/lib'));
}

function plugin() {
  return runPlugin;
}

plugin.version = version;
plugin.path = __dirname;

export default plugin;
