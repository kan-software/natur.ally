import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DonationForm } from './DonationForm';
import { userEvent } from '@testing-library/user-event';
import { addMonths, format } from 'date-fns';

describe('DonationForm', () => {
  test('should display the form', () => {
    render(<DonationForm />);

    expect(
      screen.getByRole('banner', { name: /donation header/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /i can donate/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/every month until/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/selected date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/donation total amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/donation summary/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /continue/i }),
    ).toBeInTheDocument();
  });

  test('should allow user to change values and recalculate total amount', async () => {
    render(<DonationForm />);

    await userEvent.type(
      screen.getByRole('textbox', { name: /i can donate/i }),
      '0',
    );
    await userEvent.click(screen.getByRole('button', { name: /next month/i }));

    expect(screen.getByLabelText(/donation total amount/i)).toHaveTextContent(
      '$1,250,000',
    );
    expect(screen.getByLabelText(/donation summary/i)).toHaveTextContent(
      `You will be sending $250,000 every month, until ${format(addMonths(new Date(), 4), 'LLLL yyyy')}. Thank you!`,
    );
  });
});
