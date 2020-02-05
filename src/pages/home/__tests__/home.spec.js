/* eslint-disable react/jsx-filename-extension */
import { render, shallow } from 'enzyme';
import React from 'react';

import Home from '../index';
import 'jest-styled-components';


describe('Unit tests of the Home page', () => {
  it('should render the component with the text without errors', () => {
    const Wrapper = render(<Home />);
    expect(Wrapper[0].firstChild.firstChild.firstChild.data).toContain('Welcome');
  });
  it('should render the image in the background', () => {
    const Wrapper = shallow(<Home />);
    expect(Wrapper).toHaveStyleRule('background-image', 'url(background.jpg)');
  });
});
