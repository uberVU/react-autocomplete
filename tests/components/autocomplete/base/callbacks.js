var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/base');


describe('Autocomplete', function() {
  describe('Callbacks', function() {
    var component;

    beforeEach(function() {
      TestHelpers.stubMethod(Component, 'render', null);

      component = TestHelpers.render(Component, fixture, this.container);
    });

    it('should set an empty initial state for currentValue', function() {
      expect(component.state.currentValue).to.equal('');
    });

    it('should disable the results list in initial state', function() {
      expect(component.state.resultListIsVisible).to.be.false;
    });

    it('should call the callback when handleElementClick is called', function() {
      component.handleElementClick(fixture.options[0]);

      expect(fixture.onSelect).to.have.been.calledWith(fixture.options[0]);
    });
  });
});
