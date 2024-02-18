import { DonationForm } from '@/components/organisms/DonationForm';
import { PageLayout } from '@/components/organisms/PageLayout';

export function DonationPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-[37.5rem] xs:px-2 xs:py-16">
        <DonationForm className="max-xs:min-h-screen" />
      </div>
    </PageLayout>
  );
}
