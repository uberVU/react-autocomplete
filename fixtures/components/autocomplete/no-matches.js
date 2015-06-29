var _ = require('lodash'),
    fixture = _.cloneDeep(require('./base.js'));

fixture.state = {
  currentValue: 'maverick',
  resultListIsVisible: true
};

module.exports = fixture;
