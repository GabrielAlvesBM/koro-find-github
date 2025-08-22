import { ArrowRight } from '@assets/icons/arrow-right';
import type { ReactNode } from 'react';

interface ProfileLinkButtonProps {
  href: string;
  children: ReactNode;
}

export const ProfileLinkButton = (props: ProfileLinkButtonProps) => {
  return (
    <a href={props.href} target="_blank">
      <button className="flex items-center gap-2xs py-xs px-md rounded-md underline cursor-pointer border border-white bg-brand-primary-dark">
        {strings.github}
        {props.children} <ArrowRight className="fill-text-white" />
      </button>
    </a>
  );
};

const strings = {
  github: 'github/',
};
