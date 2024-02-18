import { LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={twMerge(
        `font-primary text-sm font-medium text-midnight-gray`,
        props.className,
      )}
    />
  );
}
