var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/value-with-matches');

var $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('should render the correct number of options', function() {
      expect($component.find('.result-item').length).to.equal(2);
    });

    it('should load the correct number of children', function() {
      expect(loadChildStub).to.have.been.calledTwice;
    });
  });
});
