var React = require('react');


beforeEach(function() {
  var div = document.createElement('div');
  document.body.appendChild(div);

  this.container = div;
});


afterEach(function() {
  /**
   * Unmount the component after each test and clean up the sinon sandbox.
   */

  React.unmountComponentAtNode(this.container);

  // Clean up the sandbox after the component is unmounted so
  // componentWillUnmount is not restored if it's stubbed.
  sandbox.restore();
});

