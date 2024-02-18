import ChevronLeftIcon from '@/assets/icons/chevron_left.svg';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg';
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
      <button
        className="hover:enabled:bg-[#F3F5FE] active:enabled:bg-[rgb(232,234,242)]"
        aria-label="Previous month"
        disabled={differenceInCalendarMonths(date, new Date()) <= 0}
        onClick={handlePreviousMonth}
      >
        <ChevronLeftIcon />
      </button>
      <div
        id={id}
        aria-label="Selected date"
        className="text-center font-tertiary text-midnight-gray *:block"
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
      <button
        className="hover:bg-[#F3F5FE] active:bg-[#E8EAF2]"
        aria-label="Next month"
        onClick={handleNextMonth}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
