import DonationIcon from '@/assets/icons/donation.svg';

export function DonationHeader() {
  return (
    <header
      aria-label="donation header"
      className="flex items-center gap-5 bg-salmon px-10 pb-6 pt-8 text-midnight-purple"
    >
      <DonationIcon aria-hidden="true" />
      <div>
        <h2 className="font-primary text-4xl font-semibold">
          The giving block
        </h2>
        <p className="mt-1 font-secondary text-base font-normal">
          Set up your donation goal!
        </p>
      </div>
    </header>
  );
}
