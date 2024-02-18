import LogoIcon from '@/assets/icons/logo.svg';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function PageHeader(props: HTMLAttributes<HTMLElement>) {
  return (
    <header
      aria-label="page header"
      {...props}
      className={twMerge('bg-white px-10 py-6', props.className)}
    >
      <h1>
        <span className="sr-only">Natur.ally</span>
        <LogoIcon aria-hidden="true" />
      </h1>
    </header>
  );
}
