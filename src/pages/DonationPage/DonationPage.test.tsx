import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { DonationPage } from './DonationPage';

describe('DonationPage', () => {
  test('should display donation form and page header', () => {
    render(<DonationPage />);

    expect(
      screen.getByRole('banner', { name: /page header/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/donation form/i)).toBeInTheDocument();
  });
});
