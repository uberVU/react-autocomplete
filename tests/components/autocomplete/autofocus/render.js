var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/autofocus');

var $ = require('jquery');


describe('Autocomplete', function() {
  describe('Render', function() {
    var component, $component, loadChildStub, focusSpy;

    beforeEach(function() {
      loadChildStub = TestHelpers.stubMethod(Component, 'loadChild', null);

      component = TestHelpers.render(Component, fixture, this.container);
      $component = $(component.getDOMNode());

      focusSpy = sinon.spy();

      component.refs = {
        filterInput: {
          getDOMNode: function() {
            return {focus: focusSpy};
          }
        }
      };
    });

    it('should auto focus on the input element', function() {
      var method = component.componentDidMount.bind(component);
      method();

      expect(focusSpy.calledOnce).to.equal(true);
    });
  });
});
