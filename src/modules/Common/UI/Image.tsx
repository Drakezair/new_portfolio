import NextImage, { ImageProps } from 'next/image';

const Image = (props: ImageProps) => (
  <NextImage
    {...props}
    placeholder='blur'
    blurDataURL='/images/placeholder.jpeg'
    unoptimized={true}
  />
);

export default Image;
