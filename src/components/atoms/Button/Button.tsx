import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'rounded-md border border-transparent px-6 py-4 text-center font-primary text-base font-semibold',
  variants: {
    variant: {
      contained: 'bg-midnight-purple text-white',
      outlined: 'border-midnight-purple bg-white text-midnight-purple',
    },
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'outlined';
};

export function Button({ variant = 'contained', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(button({ variant }), props.className)}
    />
  );
}
