import { addMonths } from 'date-fns';
import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Label } from '@/components/atoms/Label';
import { AmountInput } from '@/components/molecules/AmountInput';
import { DateSwitcher } from '@/components/molecules/DateSwitcher';
import { DonationHeader } from '@/components/molecules/DonationHeader';
import { DonationSummary } from '@/components/molecules/DonationSummary';

export function DonationForm() {
  const [amount, setAmount] = useState('25000');
  const [dateTo, setDateTo] = useState(addMonths(new Date(), 3));
  const amountNumber = parseFloat(amount) || 0;

  return (
    <>
      <DonationHeader />
      <div className="px-10 py-8">
        <div className="mb-8 flex justify-between gap-6 *:flex-1">
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
          <Button variant="outlined">Cancel</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </>
  );
}
