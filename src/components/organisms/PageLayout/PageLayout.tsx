import { PageHeader } from '@/components/molecules/PageHeader';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function PageLayout({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge('min-h-screen bg-[#F4F8FA]', props.className)}
    >
      <PageHeader />
      <main>{children}</main>
    </div>
  );
}
