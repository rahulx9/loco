import { MONTH_NAMES } from "../constants/calander";

export function getFirstDayOfMonth(year, month) {
  const date = new Date(year, month, 1);
  const dayOfWeek = date.getDay();
  return dayOfWeek;
}

export function getLastDateOfMonth(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return daysInMonth;
}

export function getMonthYearString(year, month) {
    const date = new Date(year, month);
    const monthName = MONTH_NAMES[date.getMonth()];
    const yearValue = date.getFullYear();
    return `${monthName} ${yearValue}`;
}