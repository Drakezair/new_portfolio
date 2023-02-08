// jest for component ./Image.tsx

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Image from '../Image';

test('renders Image component', () => {
  render(
    <Image
      alt='image_text'
      src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      width={300}
      height={900}
    />
  );
  const image = screen.getByAltText('image_text');
  expect(image).toBeInTheDocument();
});
