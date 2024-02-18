import { format } from 'date-fns';

export const formatAmount = (amount: number) =>
  `$${new Intl.NumberFormat('en-US').format(amount)}`;

export const formatMonthYear = (date: Date) => format(date, 'LLLL yyyy');

export const formatMonth = (date: Date) => format(date, 'LLLL');

export const formatYear = (date: Date) => format(date, 'yyyy');
