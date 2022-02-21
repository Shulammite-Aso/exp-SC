import * as React from 'react';
import { render } from '@testing-library/react';

import { Midfooter } from '..';

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

describe('<Midfooter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Midfooter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
