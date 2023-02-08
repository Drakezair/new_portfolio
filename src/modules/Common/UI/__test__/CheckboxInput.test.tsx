import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import CheckboxInput from '../CheckboxInput';

test('renders Checkbox component', () => {
  render(<CheckboxInput labelText='checkbox' id='check' />);
  const checkbox = screen.getByLabelText('checkbox');
  expect(checkbox).toBeInTheDocument();
});
