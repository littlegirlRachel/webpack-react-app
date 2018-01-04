'use strict';

describe('GelleryByReactApp', () => {
  let React = require('react/addons');
  let GelleryByReactApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GelleryByReactApp = require('components/GelleryByReactApp.js');
    component = React.createElement(GelleryByReactApp);
  });

  it('should create a new instance of GelleryByReactApp', () => {
    expect(component).toBeDefined();
  });
});
