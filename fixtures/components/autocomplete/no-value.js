var _ = require('lodash'),
    fixture = _.cloneDeep(require('./no-matches.js'));

fixture.state.currentValue = '';

module.exports = fixture;
