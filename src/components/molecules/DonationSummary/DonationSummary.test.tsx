import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DonationSummary } from './DonationSummary';

describe('DonationSummary', () => {
  test('should render the donation summary', () => {
    render(<DonationSummary amount={25000} dateTo={new Date(2023, 7, 1)} />);

    expect(screen.getByLabelText(/total amount/i)).toHaveTextContent('$25,000');
    expect(screen.getByLabelText(/donation summary/i)).toHaveTextContent(
      'You will be sending $25,000 every month, until August 2023. Thank you!',
    );
  });
});
