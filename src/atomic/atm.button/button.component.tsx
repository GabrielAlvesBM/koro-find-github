import type { ReactNode } from 'react';
import { style } from './button.style';

interface ButtonProps {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <button className={style()}>{props.children}</button>;
};
