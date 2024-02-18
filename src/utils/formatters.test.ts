import { describe, expect, test } from 'vitest';
import {
  formatAmount,
  formatMonth,
  formatMonthYear,
  formatYear,
} from './formatters';

describe('formatters', () => {
  describe('formatMonth', () => {
    test('should format the month', () => {
      const testData = [
        { date: new Date(2024, 0, 1), output: 'January' },
        { date: new Date(2024, 1, 1), output: 'February' },
        { date: new Date(2024, 2, 1), output: 'March' },
        { date: new Date(2024, 3, 1), output: 'April' },
        { date: new Date(2024, 4, 1), output: 'May' },
        { date: new Date(2024, 5, 1), output: 'June' },
        { date: new Date(2024, 6, 1), output: 'July' },
        { date: new Date(2024, 7, 1), output: 'August' },
        { date: new Date(2024, 8, 1), output: 'September' },
        { date: new Date(2024, 9, 1), output: 'October' },
        { date: new Date(2024, 10, 1), output: 'November' },
        { date: new Date(2024, 11, 1), output: 'December' },
      ];

      testData.forEach(({ date, output }) => {
        expect(formatMonth(date)).toBe(output);
      });
    });
  });

  describe('formatYear', () => {
    test('should format the year', () => {
      const testData = [
        { date: new Date(2024, 0, 1), output: '2024' },
        { date: new Date(2025, 0, 1), output: '2025' },
        { date: new Date(2026, 0, 1), output: '2026' },
        { date: new Date(2027, 0, 1), output: '2027' },
        { date: new Date(2028, 0, 1), output: '2028' },
        { date: new Date(2029, 0, 1), output: '2029' },
        { date: new Date(2030, 0, 1), output: '2030' },
      ];

      testData.forEach(({ date, output }) => {
        expect(formatYear(date)).toBe(output);
      });
    });
  });

  describe('formatMonthYear', () => {
    test('should format the month and year', () => {
      const testData = [
        { date: new Date(2024, 0, 1), output: 'January 2024' },
        { date: new Date(2025, 1, 1), output: 'February 2025' },
        { date: new Date(2026, 2, 1), output: 'March 2026' },
        { date: new Date(2027, 3, 1), output: 'April 2027' },
        { date: new Date(2028, 4, 1), output: 'May 2028' },
        { date: new Date(2029, 5, 1), output: 'June 2029' },
        { date: new Date(2030, 6, 1), output: 'July 2030' },
        { date: new Date(2031, 7, 1), output: 'August 2031' },
        { date: new Date(2032, 8, 1), output: 'September 2032' },
        { date: new Date(2033, 9, 1), output: 'October 2033' },
        { date: new Date(2034, 10, 1), output: 'November 2034' },
        { date: new Date(2035, 11, 1), output: 'December 2035' },
      ];

      testData.forEach(({ date, output }) => {
        expect(formatMonthYear(date)).toBe(output);
      });
    });
  });

  describe('formatAmount', () => {
    test('should format the amount', () => {
      const testData = [
        { amount: 0, output: '$0' },
        { amount: 1, output: '$1' },
        { amount: 10, output: '$10' },
        { amount: 100, output: '$100' },
        { amount: 1000, output: '$1,000' },
        { amount: 10000, output: '$10,000' },
        { amount: 100000, output: '$100,000' },
        { amount: 1000000, output: '$1,000,000' },
        { amount: 10.5, output: '$10.5' },
        { amount: 10.55, output: '$10.55' },
      ];

      testData.forEach(({ amount, output }) => {
        expect(formatAmount(amount)).toBe(output);
      });
    });
  });
});
