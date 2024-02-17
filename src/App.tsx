import { Button } from '@/components/atoms/Button';
import { AmountInput } from '@/components/atoms/AmountInput';

export function App() {
  return (
    <>
      <AmountInput defaultValue={25000} />
      <Button variant="outlined">Cancel</Button>
      <Button>Continue</Button>
    </>
  );
}
