import ChevronLeftIcon from '@/assets/icons/chevron_left.svg';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg';
import { addMonths, format, subMonths } from 'date-fns';

type DateSwitcherProps = {
  selectedDate: Date;
  onChange: (date: Date) => void;
};

export function DateSwitcher({ selectedDate, onChange }: DateSwitcherProps) {
  const handlePreviousMonth = () => {
    onChange(subMonths(selectedDate, 1));
  };

  const handleNextMonth = () => {
    onChange(addMonths(selectedDate, 1));
  };

  return (
    <div className="flex items-center justify-between rounded border border-blue-gray-50 p-3">
      <button
        className="hover:bg-[#F3F5FE] active:bg-[#E8EAF2]"
        aria-label="Previous month"
        onClick={handlePreviousMonth}
      >
        <ChevronLeftIcon />
      </button>
      <div className="text-center font-tertiary *:block">
        <span className="text-base font-medium" aria-label="Selected month">
          {format(selectedDate, 'LLLL')}
        </span>
        <span
          className="font-primary text-xs font-normal"
          aria-label="Selected year"
        >
          {format(selectedDate, 'yyyy')}
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
