import { render, screen } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import { DateSwitcher } from './DateSwitcher';
import { userEvent } from '@testing-library/user-event';
import { addMonths, subMonths } from 'date-fns';
import { formatMonth, formatYear } from '@/utils/formatters';

describe('DateSwitcher', () => {
  test('should display selected month and year with switch buttons', () => {
    const date = addMonths(new Date(), 3);

    render(<DateSwitcher date={date} onChange={vitest.fn()} />);

    expect(screen.getByLabelText(/selected month/i)).toHaveTextContent(
      formatMonth(date),
    );
    expect(screen.getByLabelText(/selected year/i)).toHaveTextContent(
      formatYear(date),
    );
    expect(
      screen.getByRole('button', { name: /previous month/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /next month/i }),
    ).toBeInTheDocument();
  });

  test('should call `onChange` with previous month when previous month button is clicked', async () => {
    const date = addMonths(new Date(), 3);
    const onChange = vitest.fn();

    render(<DateSwitcher date={date} onChange={onChange} />);

    await userEvent.click(
      screen.getByRole('button', { name: /previous month/i }),
    );

    expect(onChange).toHaveBeenCalledWith(subMonths(date, 1));
  });

  test('should call `onChange` with next month when next month button is clicked', async () => {
    const date = addMonths(new Date(), 3);
    const onChange = vitest.fn();

    render(<DateSwitcher date={date} onChange={onChange} />);

    await userEvent.click(screen.getByRole('button', { name: /next month/i }));

    expect(onChange).toHaveBeenCalledWith(addMonths(date, 1));
  });

  test('should disable previous month button when current month is selected', () => {
    const date = new Date();

    render(<DateSwitcher date={date} onChange={vitest.fn()} />);

    expect(
      screen.getByRole('button', { name: /previous month/i }),
    ).toBeDisabled();
  });
});
