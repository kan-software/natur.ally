import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';
import DollarIcon from '@/assets/icons/dollar.svg';

export function AmountInput(props: CurrencyInputProps) {
  return (
    <div className="relative">
      <div className="absolute left-2 top-2/4 -translate-y-1/2">
        <DollarIcon role="img" aria-label="USD currency" />
      </div>
      <CurrencyInput
        {...props}
        placeholder="0.00"
        className="w-full rounded border border-blue-gray-50 py-4 pl-10 pr-4 font-tertiary text-2xl font-medium text-midnight-purple outline-none placeholder:text-[#00000033] focus:border-midnight-purple"
      />
    </div>
  );
}
