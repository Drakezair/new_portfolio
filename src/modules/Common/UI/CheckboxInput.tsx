import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  ReactElement,
} from 'react';

interface CheckboxInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelText?: string;
  labelProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  labelElement?: ReactElement;
  wrapperClassName?: string;
}

const CheckboxInput = forwardRef(
  (
    {
      labelText,
      labelProps,
      labelElement,
      wrapperClassName,
      ...rest
    }: CheckboxInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className={`form-check ${wrapperClassName}`}>
        <input
          ref={ref}
          type='checkbox'
          {...rest}
          className={`form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none  rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-2 checked:border-gray-800 checked:bg-gray-800 focus:outline-none ${rest.className}`}
        />
        <label
          className={`form-check-label inline-block font-primary capitalize text-gray-800 ${labelProps?.className}`}
          {...labelProps}
          htmlFor={rest.id}
        >
          {labelElement ? labelElement : labelText}
        </label>
      </div>
    );
  }
);

export default CheckboxInput;
