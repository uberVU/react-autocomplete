var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/result-list-visible');

var $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('should render the result list', function() {
      expect($component.find('.result-list').length).to.equal(1);
    });

    it('should not attach a blur event handler', function() {
      expect(component.refs.filterInput.props.onBlur).to.be.undefined;
    });

    it('should not attach a focus event handler', function() {
      expect(component.refs.filterInput.props.onFocus).to.be.undefined;
    });
  });
});
