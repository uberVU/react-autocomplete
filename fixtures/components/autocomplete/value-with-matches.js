var _ = require('lodash'),
    fixture = _.cloneDeep(require('./base.js'));

fixture.options = _.times(10, function(index) {
  return {
    component: require('../dummy.js'),
    id: index + 1,
    username: (index === 0 ? 'Mark' : 'uberVU') + (index + 1),
    email: (index === 1 ? 'mark' : 'ubervu' ) + (index + 1) + '@hootsuite.com'
  };
});

fixture.state = {
  currentValue: 'Mark',
  resultListIsVisible: true
};

module.exports = fixture;
