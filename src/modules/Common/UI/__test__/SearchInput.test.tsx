import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import SearchInput from '../SearchInput';

test('renders Button component', () => {
  render(<SearchInput inputProps={{ placeholder: 'Search' }} />);
  const inputSearch = screen.getByPlaceholderText('Search');
  expect(inputSearch).toBeInTheDocument();
});
