import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Button from '../Button';

test('renders Button component', () => {
  render(<Button>Button</Button>);
  const button = screen.getByText('Button');
  expect(button).toBeInTheDocument();
});
