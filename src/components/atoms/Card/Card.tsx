import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge('bg-white shadow-card', props.className)}
    />
  );
}
