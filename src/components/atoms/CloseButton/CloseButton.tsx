import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import CloseIcon from '@/assets/icons/close.svg';

export function CloseButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-label="Close button"
      {...props}
      className={twMerge('rounded-xl p-2 active:bg-[#F2D0C1]', props.className)}
    >
      <CloseIcon aria-hidden="true" />
    </button>
  );
}
