import * as React from 'react';

enum ButtonVariant {
  'primary',
  'light',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const classesVariant = {
  primary:
    'rounded-full bg-gray-800 px-5 py-2 font-primary text-white hover:bg-gray-700',
  light:
    'rounded-full bg-yellow-400 px-5 py-2 font-primary text-gray-800 hover:bg-yellow-500',
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
        data-testid='Button'
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
