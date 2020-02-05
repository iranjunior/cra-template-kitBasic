/* eslint-disable react/jsx-filename-extension */
import { render } from 'enzyme';
import React from 'react';

import Title from '../index';

describe('Unit tests of the Title components', () => {
  it('should render the component without errors', () => {
    const Wrapper = render(<Title />);
    expect(Wrapper[0].firstChild.firstChild.data).toContain('Welcome');
  });
});
