import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { AmountInput } from '@/components/molecules/AmountInput';
import { DateSwitcher } from '@/components/molecules/DateSwitcher';
import { DonationHeader } from '@/components/molecules/DonationHeader';

export function App() {
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 7, 1));

  return (
    <main>
      <DonationHeader />
      <AmountInput defaultValue={25000} />
      <DateSwitcher selectedDate={selectedDate} onChange={setSelectedDate} />
      <Button variant="outlined">Cancel</Button>
      <Button>Continue</Button>
    </main>
  );
}
