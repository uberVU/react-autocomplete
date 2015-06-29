var _ = require('lodash'),
    fixture = _.cloneDeep(require('./base.js'));

fixture.alwaysShowResultList = true;

module.exports = fixture;
