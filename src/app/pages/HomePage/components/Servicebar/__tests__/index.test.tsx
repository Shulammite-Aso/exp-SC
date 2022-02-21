import * as React from 'react';
import { render } from '@testing-library/react';

import { Servicebar } from '..';

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

describe('<Servicebar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Servicebar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
