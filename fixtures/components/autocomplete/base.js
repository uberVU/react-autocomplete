var _ = require('lodash');

module.exports = {
  component: 'autocomplete',

  onSelect: sinon.spy(),
  searchableFields: ['username', 'email'],

  options: _.times(10, function(index) {
    return {
      component: require('../dummy.js'),
      id: index + 1,
      username: 'uberVU ' + (index + 1),
      email: 'ubervu' + (index + 1) + '@hootsuite.com'
    };
  })
};
