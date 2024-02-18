import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { AmountInput } from '@/components/molecules/AmountInput';
import { DateSwitcher } from '@/components/molecules/DateSwitcher';
import { DonationHeader } from '@/components/molecules/DonationHeader';
import { Label } from './components/atoms/Label/Label';
import { TotalAmount } from './components/molecules/TotalAmount';

export function App() {
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 7, 1));

  return (
    <main>
      <DonationHeader />
      <Label>I can donate</Label>
      <AmountInput defaultValue={25000} />
      <DateSwitcher selectedDate={selectedDate} onChange={setSelectedDate} />
      <Button variant="outlined">Cancel</Button>
      <Button>Continue</Button>
      <TotalAmount amount={25000} />
    </main>
  );
}
