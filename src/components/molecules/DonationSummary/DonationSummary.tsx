import { format } from 'date-fns';

type DonationSummaryProps = {
  amount: number;
  dateTo: Date;
};

const formatter = new Intl.NumberFormat('en-US');

export function DonationSummary({ amount, dateTo }: DonationSummaryProps) {
  const renderSummaryValue = (value: string) => (
    <strong className="font-secondary text-xs font-bold">{value}</strong>
  );

  const formattedAmount = `$${formatter.format(amount)}`;
  const formattedDateTo = format(dateTo, 'LLLL yyyy');

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
          {formattedAmount}
        </span>
      </div>
      <div className="mt-6 bg-[#F4F8FA] px-4 py-6 font-primary text-xs font-normal">
        <span aria-label="Donation summary">
          You will be sending {renderSummaryValue(formattedAmount)} every month,
          until {renderSummaryValue(formattedDateTo)}. Thank you!
        </span>
      </div>
    </div>
  );
}
