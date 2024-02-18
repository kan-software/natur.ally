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
      className={twMerge('xs:min-h-screen xs:bg-[#F4F8FA]', props.className)}
    >
      <PageHeader className=" max-xs:hidden" />
      <main>{children}</main>
    </div>
  );
}
