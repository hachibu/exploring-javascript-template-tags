var createTag = require('../create-tag'),
    template  = require('@babel/template'),
    generate  = require('@babel/generator').default,
    types     = require('@babel/types');

var qq = createTag(
  result => generate(template.program.ast(result)).code,
  value  => generate(value).code
);

module.exports = qq;
