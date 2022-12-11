import * as React from 'react';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const classesVariant = {
  primary:
    'rounded-full bg-gray-800 px-5 py-2 font-primary text-white hover:bg-gray-700',
  outline:
    'rounded-full bg-gray-800 px-5 py-2 font-primary text-white hover:bg-gray-700',
  ghost:
    'rounded-full bg-gray-800 px-5 py-2 font-primary text-white hover:bg-gray-700',
  light:
    'rounded-full bg-gray-800 px-5 py-2 font-primary text-white hover:bg-gray-700',
  dark: 'rounded-full bg-gray-800 px-5 py-2 font-primary text-white hover:bg-gray-700',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        {...rest}
        disabled={disabled}
        className={`${classesVariant[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
