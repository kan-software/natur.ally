import { SwitchButton } from '@/components/atoms/SwitchButton';
import {
  addMonths,
  differenceInCalendarMonths,
  format,
  subMonths,
} from 'date-fns';

type DateSwitcherProps = {
  id?: string;
  date: Date;
  onChange: (date: Date) => void;
};

export function DateSwitcher({ id, date, onChange }: DateSwitcherProps) {
  const handlePreviousMonth = () => {
    onChange(subMonths(date, 1));
  };

  const handleNextMonth = () => {
    onChange(addMonths(date, 1));
  };

  return (
    <div className="flex items-center justify-between rounded border border-blue-gray-50 p-3">
      <SwitchButton
        direction="left"
        aria-label="Previous month"
        disabled={differenceInCalendarMonths(date, new Date()) <= 0}
        onClick={handlePreviousMonth}
      />
      <div
        id={id}
        aria-label="Selected date"
        className="text-center font-tertiary text-midnight-purple *:block"
      >
        <span className="text-base font-medium" aria-label="Selected month">
          {format(date, 'LLLL')}
        </span>
        <span
          className="font-primary text-xs font-normal"
          aria-label="Selected year"
        >
          {format(date, 'yyyy')}
        </span>
      </div>
      <SwitchButton
        direction="right"
        aria-label="Next month"
        onClick={handleNextMonth}
      />
    </div>
  );
}
