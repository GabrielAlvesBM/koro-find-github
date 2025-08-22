import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  const { ...rest } = props;

  return (
    <input
      className="p-xs rounded-md text-lg border border-brand-primary-dark"
      type="text"
      autoComplete="false"
      {...rest}
    />
  );
};
