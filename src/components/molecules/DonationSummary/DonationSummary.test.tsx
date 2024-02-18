import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DonationSummary } from './DonationSummary';
import { addMonths } from 'date-fns';
import { formatMonthYear } from '@/utils/formatters';

describe('DonationSummary', () => {
  test('should render the donation summary', () => {
    const dateTo = addMonths(new Date(), 3);

    render(
      <DonationSummary amount={25000} dateTo={addMonths(new Date(), 3)} />,
    );

    expect(screen.getByLabelText(/total amount/i)).toHaveTextContent(
      '$100,000',
    );
    expect(screen.getByLabelText(/donation summary/i)).toHaveTextContent(
      `You will be sending $25,000 every month, until ${formatMonthYear(dateTo)}. Thank you!`,
    );
  });
});
