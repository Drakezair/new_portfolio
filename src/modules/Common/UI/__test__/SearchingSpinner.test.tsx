import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import 'jest-canvas-mock';

import SearchingSpinner from '../SearchingSpinner';

test('renders SearchSpinner component', () => {
  render(<SearchingSpinner />);
  const spinner = screen.getByTestId('search-spinner');
  expect(spinner).toBeInTheDocument();
});
