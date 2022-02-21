import * as React from 'react';
import { render } from '@testing-library/react';

import { Bottomfooter } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Bottomfooter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Bottomfooter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
