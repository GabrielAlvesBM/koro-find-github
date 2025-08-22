import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { style } from './button.style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { ...rest } = props;

  return (
    <button className={style()} {...rest}>
      {props.children}
    </button>
  );
};
