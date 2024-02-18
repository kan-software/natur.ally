import DonationIcon from '@/assets/icons/donation.svg';
import { CloseButton } from '@/components/atoms/CloseButton';

export function DonationHeader() {
  return (
    <header
      aria-label="donation header"
      className="relative flex items-center gap-4 bg-salmon px-6 pb-7 pt-6 text-midnight-purple max-xs:flex-col xs:gap-5 xs:px-10 xs:pb-6 xs:pt-8"
    >
      <DonationIcon aria-hidden="true" />
      <div className="max-xs:text-center">
        <h2 className="font-primary text-2xl font-semibold xs:text-4xl">
          The giving block
        </h2>
        <p className="mt-1 font-secondary text-base font-normal">
          Set up your donation goal!
        </p>
      </div>
      <CloseButton className="absolute right-2 top-2 xs:hidden" />
    </header>
  );
}
