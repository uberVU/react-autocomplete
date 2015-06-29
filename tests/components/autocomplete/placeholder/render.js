var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/placeholder');

var $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('should render placeholder text', function() {
      expect(component.refs.filterInput.props.placeholder).to
          .equal(fixture.placeholderText);
    });
  });
});
