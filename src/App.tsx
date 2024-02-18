import { Button } from '@/components/atoms/Button';
import { AmountInput } from '@/components/atoms/AmountInput';
import { DateSwitcher } from '@/components/atoms/DateSwitcher';
import { useState } from 'react';

export function App() {
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 7, 1));

  return (
    <main>
      <AmountInput defaultValue={25000} />
      <DateSwitcher selectedDate={selectedDate} onChange={setSelectedDate} />
      <Button variant="outlined">Cancel</Button>
      <Button>Continue</Button>
    </main>
  );
}
