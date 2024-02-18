import { render, screen } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import { DateSwitcher } from './DateSwitcher';
import { userEvent } from '@testing-library/user-event';

describe('DateSwitcher', () => {
  test('should display selected month and year with switch buttons', () => {
    render(
      <DateSwitcher
        selectedDate={new Date(2023, 7, 1)}
        onChange={vitest.fn()}
      />,
    );

    expect(screen.getByLabelText(/selected month/i)).toHaveTextContent(
      'August',
    );
    expect(screen.getByLabelText(/selected year/i)).toHaveTextContent('2023');
    expect(
      screen.getByRole('button', { name: /previous month/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /next month/i }),
    ).toBeInTheDocument();
  });

  test('should call `onChange` with previous month when previous month button is clicked', async () => {
    const onChange = vitest.fn();

    render(
      <DateSwitcher selectedDate={new Date(2023, 7, 1)} onChange={onChange} />,
    );

    await userEvent.click(
      screen.getByRole('button', { name: /previous month/i }),
    );

    expect(onChange).toHaveBeenCalledWith(new Date(2023, 6, 1));
  });

  test('should call `onChange` with next month when next month button is clicked', async () => {
    const onChange = vitest.fn();

    render(
      <DateSwitcher selectedDate={new Date(2023, 7, 1)} onChange={onChange} />,
    );

    await userEvent.click(screen.getByRole('button', { name: /next month/i }));

    expect(onChange).toHaveBeenCalledWith(new Date(2023, 8, 1));
  });
});
