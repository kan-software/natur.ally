import { DonationForm } from '@/components/organisms/DonationForm';
import { PageLayout } from '@/components/organisms/PageLayout';

export function DonationPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-[37.5rem] py-16">
        <DonationForm />
      </div>
    </PageLayout>
  );
}
