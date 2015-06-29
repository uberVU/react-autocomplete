var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/base');

var TestUtils = require('react/addons').addons.TestUtils,
    $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('should have autocomplete class name', function() {
      expect($component.hasClass('autocomplete')).to.be.true;
    });

    it('should not show the result list by default', function() {
      expect($component.find('.result-list').length).to.equal(0);
    });

    it('should show results list when focusing on the input', function() {
      TestUtils.Simulate.focus(component.refs.filterInput.getDOMNode());

      expect($component.find('.result-list').length).to.equal(1);
    });

    it('should update state on focus', function() {
      TestUtils.Simulate.focus(component.refs.filterInput.getDOMNode());

      expect(component.state.resultListIsVisible).to.be.true;
    });

    it('should update state when typing', function() {
      TestHelpers.simulateTyping(component.refs.filterInput, 'foobar');

      expect(component.state.currentValue).to.equal('foobar');
    });

    it('should not set placeholder text', function() {
      expect(component.refs.filterInput.props.placeholder).to.not.exist;
    });
  });
});
