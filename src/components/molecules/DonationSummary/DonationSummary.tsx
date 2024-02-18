import { formatAmount, formatMonthYear } from '@/utils/formatters';
import { differenceInCalendarMonths } from 'date-fns';

type DonationSummaryProps = {
  amount: number;
  dateTo: Date;
};

const renderSummaryValue = (value: string) => (
  <strong
    className="font-secondary text-xs font-bold"
    style={{ wordBreak: 'break-word' }}
  >
    {value}
  </strong>
);

export function DonationSummary({ amount, dateTo }: DonationSummaryProps) {
  const donationMonthsCount =
    differenceInCalendarMonths(dateTo, new Date()) + 1;
  const totalAmount = amount * donationMonthsCount;

  return (
    <div className="max-xs:rounded max-xs:border max-xs:border-stroke max-xs:pt-6">
      <div className="flex items-center justify-between px-4">
        <span className="font-primary text-base font-medium text-blue-gray-900 xs:text-xl">
          Total amount
        </span>
        <span
          className="text-right font-secondary text-2xl font-bold text-midnight-purple xs:text-4xl"
          style={{ wordBreak: 'break-word' }}
          aria-label="Donation total amount"
        >
          {formatAmount(totalAmount)}
        </span>
      </div>
      <div className="mt-6 bg-[#F4F8FA] px-4 py-6 font-primary text-xs font-normal">
        <span aria-label="Donation summary">
          You will be sending {renderSummaryValue(formatAmount(amount))} every
          month, until {renderSummaryValue(formatMonthYear(dateTo))}. Thank you!
        </span>
      </div>
    </div>
  );
}
