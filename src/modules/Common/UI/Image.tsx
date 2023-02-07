import NextImage, { ImageProps } from 'next/image';

export const Image = (props: ImageProps) => (
  <NextImage
    {...props}
    placeholder='blur'
    blurDataURL='/images/placeholder.jpeg'
    unoptimized={true}
  />
);
