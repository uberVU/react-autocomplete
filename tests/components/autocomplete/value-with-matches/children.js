var Component = require('components/autocomplete.jsx'),
    fixture = require('fixtures/components/autocomplete/value-with-matches');


describe('Autocomplete', function() {
  describe('Children', function() {
    var component;

    beforeEach(function() {
      TestHelpers.stubMethod(Component, 'render', null);

      component = TestHelpers.render(Component, fixture, this.container);
    });

    describe('autocomplete item', function() {
      var firstMatch, props;

      beforeEach(function() {
        firstMatch = fixture.options[0];
        props = TestHelpers.getChildProps(component,
                                          'autocompleteItem',
                                          [firstMatch]);
      });

      it('should have a component name', function() {
        expect(props.component).to.equal(firstMatch.component);
      });

      it('should have an unique ref', function() {
        expect(props.ref).to.equal('autocompleteItem' + firstMatch.id);
      });

      it('should have a unique key', function() {
        expect(props.key).to.equal(firstMatch.id);
      });
    });
  });
});
