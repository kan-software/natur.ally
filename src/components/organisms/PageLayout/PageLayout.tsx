import { PageHeader } from '@/components/molecules/PageHeader';
import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F4F8FA]">
      <PageHeader />
      <main>{children}</main>
    </div>
  );
}
