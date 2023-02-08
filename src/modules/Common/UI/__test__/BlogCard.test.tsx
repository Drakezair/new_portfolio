import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import 'jest-canvas-mock';

import BlogCard from '../BlogCard';

test('renders BlogCard component', () => {
  render(
    <BlogCard
      image='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      title='BlogCard'
      id='123'
      description='BlogCard description'
    />
  );
  const blogCard = screen.getByTestId('blog-card');
  expect(blogCard).toBeInTheDocument();
  expect(screen.getByText('BlogCard')).toBeVisible();
});
