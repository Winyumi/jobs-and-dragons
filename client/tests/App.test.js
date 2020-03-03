import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('should have `p` "Hello from J&D!"', () => {
    const app = shallow(<App />);

    expect(app.contains(<p>Hello from J&D!</p>));
  });
});
