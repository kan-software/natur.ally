import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import ChevronLeftIcon from '@/assets/icons/chevron_left.svg';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg';

type SwitchButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  direction: 'left' | 'right';
};

export function SwitchButton({ direction, ...props }: SwitchButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        `over:enabled:bg-[#F3F5FE] rounded-md active:enabled:bg-[rgb(232,234,242)]`,
        props.className,
      )}
    >
      {direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}
