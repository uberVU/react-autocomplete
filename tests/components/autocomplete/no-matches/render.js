var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/no-matches');

var $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('should not render any items', function() {
      expect($component.find('.result-item').length).to.equal(0);
    });

    it('should render an empty state message', function() {
      expect($component.find('.empty-state').length).to.equal(1);
    });
  });
});
