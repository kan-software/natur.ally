import { addMonths } from 'date-fns';
import { HTMLAttributes, useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { AmountInput } from '@/components/molecules/AmountInput';
import { DateSwitcher } from '@/components/molecules/DateSwitcher';
import { DonationHeader } from '@/components/molecules/DonationHeader';
import { DonationSummary } from '@/components/molecules/DonationSummary';
import { Card } from '@/components/atoms/Card';

export function DonationForm(props: HTMLAttributes<HTMLDivElement>) {
  const [amount, setAmount] = useState('25000');
  const [dateTo, setDateTo] = useState(addMonths(new Date(), 3));
  const amountNumber = parseFloat(amount) || 0;

  return (
    <Card aria-label="donation form" {...props}>
      <DonationHeader />
      <div className="px-6 py-8 xs:px-10">
        <div className="mb-10 flex justify-between gap-4 leading-[0rem] *:flex-1 max-xs:flex-col xs:mb-8 xs:gap-6">
          <div>
            <Label className="mb-1" htmlFor="donation-amount">
              I can donate
            </Label>
            <AmountInput
              id="donation-amount"
              value={amount}
              onValueChange={(value) => setAmount(value ?? '')}
            />
          </div>
          <div>
            <Label className="mb-1" htmlFor="donation-date-to">
              Every month until
            </Label>
            <DateSwitcher
              id="donation-date-to"
              date={dateTo}
              onChange={setDateTo}
            />
          </div>
        </div>
        <DonationSummary amount={amountNumber} dateTo={dateTo} />
        <div className="mt-8 flex justify-between gap-6 p-2 *:flex-1">
          <Button variant="outlined" className="max-xs:hidden">
            Cancel
          </Button>
          <Button>Continue</Button>
        </div>
      </div>
    </Card>
  );
}
