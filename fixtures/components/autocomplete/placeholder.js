var _ = require('lodash'),
    fixture = _.cloneDeep(require('./base.js'));

fixture.placeholderText = 'Search ...';

module.exports = fixture;
