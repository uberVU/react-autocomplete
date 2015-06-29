var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/no-value');

var TestUtils = require('react/addons').addons.TestUtils,
    $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub, handleElementClickStub;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);
      handleElementClickStub = TestHelpers.stubMethod(Component,
          'handleElementClick', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());
    });

    it('should pass option data to autocompleteItem child', function() {
      expect(loadChildStub.getCall(0).args[1]).to.equal(fixture.options[0]);
    });

    it('should render the correct number of options', function() {
      expect($component.find('.result-item').length)
          .to.equal(fixture.options.length);
    });

    it('should call the callback when an item is clicked', function() {
      TestUtils.Simulate.mouseDown($component.find('.result-item:nth-child(1)')[0]);

      expect(handleElementClickStub).to.have.been.calledWith(fixture.options[0]);
    });


    it('should hide result list when the input is blurred', function() {
      TestUtils.Simulate.blur(component.refs.filterInput.getDOMNode());

      expect($component.find('.result-list').length).to.equal(0);
    });
  });
});
