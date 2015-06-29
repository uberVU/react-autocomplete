var _ = require('lodash'),
    fixture = _.cloneDeep(require('./base.js'));

fixture.autoFocus = true;

module.exports = fixture;
