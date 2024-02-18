import { differenceInCalendarMonths, format } from 'date-fns';

type DonationSummaryProps = {
  amount: number;
  dateTo: Date;
};

const formatAmount = (amount: number) =>
  `$${new Intl.NumberFormat('en-US').format(amount)}`;

const formatDate = (date: Date) => format(date, 'LLLL yyyy');

const renderSummaryValue = (value: string) => (
  <strong className="font-secondary text-xs font-bold">{value}</strong>
);

export function DonationSummary({ amount, dateTo }: DonationSummaryProps) {
  const donationMonthsCount =
    differenceInCalendarMonths(dateTo, new Date()) + 1;
  const totalAmount = amount * donationMonthsCount;

  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <span className="font-primary text-xl font-medium text-blue-gray-900">
          Total amount
        </span>
        <span
          className="text-right font-secondary text-4xl font-bold text-midnight-purple"
          aria-label="Donation total amount"
        >
          {formatAmount(totalAmount)}
        </span>
      </div>
      <div className="mt-6 bg-[#F4F8FA] px-4 py-6 font-primary text-xs font-normal">
        <span aria-label="Donation summary">
          You will be sending {renderSummaryValue(formatAmount(amount))} every
          month, until {renderSummaryValue(formatDate(dateTo))}. Thank you!
        </span>
      </div>
    </div>
  );
}
