import { render, screen } from '@testing-library/react';
import { AmountInput } from './AmountInput';
import { describe, expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';

describe('AmountInput', () => {
  test('should display USD currency icon', () => {
    render(<AmountInput />);

    expect(
      screen.getByRole('img', { name: /usd currency/i }),
    ).toBeInTheDocument();
  });

  test('should format value as currency', () => {
    render(<AmountInput defaultValue={25000} />);

    expect(screen.getByRole('textbox')).toHaveValue('25,000');
  });

  test('should be able to display decimal value', () => {
    render(<AmountInput defaultValue={25000.55} />);

    expect(screen.getByRole('textbox')).toHaveValue('25,000.55');
  });

  test('should be able to input value', async () => {
    render(<AmountInput />);

    await userEvent.type(screen.getByRole('textbox'), '25000.50');

    expect(screen.getByRole('textbox')).toHaveValue('25,000.50');
  });
});
