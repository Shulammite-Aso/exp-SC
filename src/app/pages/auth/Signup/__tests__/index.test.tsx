import * as React from 'react';
import { render } from '@testing-library/react';

import { Signup } from '..';

describe('<SignupPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Signup />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
