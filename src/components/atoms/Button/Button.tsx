import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'rounded-md border border-transparent px-6 py-4 text-center font-primary text-base font-semibold',
  variants: {
    variant: {
      contained:
        'bg-midnight-purple text-white hover:bg-midnight-purple-light active:bg-midnight-purple-dark',
      outlined:
        'border-midnight-purple bg-white text-midnight-purple hover:bg-[#B2A7F41A] active:bg-[#B2A7F440]',
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
