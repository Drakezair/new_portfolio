import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

interface SearchInputProps {
  buttonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export default function SearchInput({
  buttonProps,
  inputProps,
}: SearchInputProps) {
  return (
    <div className='grid  h-8 w-full grid-cols-12 rounded-full border border-black'>
      <input
        placeholder='Buscar'
        className='col-span-10 rounded-full px-2 focus:outline-none'
        {...inputProps}
      />
      <button className='col-span-2' {...buttonProps}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
    </div>
  );
}
