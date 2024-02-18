type TotalAmountProps = {
  amount: number;
};

const formatter = new Intl.NumberFormat('en-US');

export function TotalAmount({ amount }: TotalAmountProps) {
  const amountText = `$${formatter.format(amount)}`;

  return (
    <div className="flex items-center justify-between px-4">
      <p className="font-primary text-xl font-medium text-blue-gray-900">
        Total amount
      </p>
      <p className="text-right font-secondary text-4xl font-bold text-midnight-purple">
        {amountText}
      </p>
    </div>
  );
}
