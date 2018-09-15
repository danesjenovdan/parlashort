const _ = require('lodash');

require('require-all')({
  dirname     :  __dirname,
  filter      :  /^((?!index).)*$/,
  excludeDirs :  /^\.(git|svn)$/,
  recursive   : true
});