const React = require( 'react' );

module.exports = {
  ModuleContainer: ( { children, name } ) => React.createElement(
    'div',
    {
      className: 'static-module-test-container',
      'data-module-name': name,
    },
    children,
  ),
  StyleContainer: ( { children } ) => React.createElement(
    React.Fragment,
    null,
    children,
  ),
  CssStyle: () => null,
};
